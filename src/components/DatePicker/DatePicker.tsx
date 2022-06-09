import React, { useState, useEffect } from 'react';
import moment, { Moment } from 'moment';
import styled, { css } from 'styled-components';
import { FocusedInputShape, DateRangePicker } from 'react-dates';
import { FaCalendarAlt } from 'react-icons/fa';
import { snakeCase } from 'lodash';
import TimePicker from 'react-time-picker';
// import StyledTimePicker from '../TimeHourPicker/TimeHourPicker';
import colors from '../../theme/colors';
import {
  addCustomTimeToDate,
  getMonthOptions,
  getYearOptions,
  timeMinutesSplitter,
} from '../../utils/helpers';
import Dropdown from '../Dropdown';
import { Option } from '../Dropdown/Dropdown';
import DatePickerWrapper from './DatePickerWrapper';
import { PERIODS, INNERPERIODS } from './periods';
import { Styled } from './styles';
import {
  AnalyticsComponent,
  AnalyticsEvents,
  AnalyticsComponentType,
  AnalyticsProps,
} from '../../analytics';
import 'react-dates/initialize';

const TimeIntervalContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ContentHolder = styled.div<{ isDropdown?: boolean }>`
  margin: 0 auto;
  padding: 15px 0 15px;
  ${({ isDropdown }) =>
    !isDropdown &&
    css`
      display: flex;
      justify-content: flex-end;
      width: 86%;
    `}
`;

const StyledDropdown = styled(Dropdown)`
  margin-right: 1rem;
  color: ${colors.blue};
  background-color: transparent;
  border: 1px solid ${colors.blue};
  font-size: ${({ theme }) => theme.font.sizes.extraSmall};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  border-radius: 5px;
`;

const AnalyticsPeriods = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  padding: 10px;
  margin-right: 10px;
`;

const SpanContainer = styled.div`
  margin-right: 10px;
  display: inline-block;
`;

interface SpanProps {
  active: boolean;
}

const StyledSpan = styled.span<SpanProps>`
  cursor: pointer;
  color: ${({ active }) => active && colors.skyBlue};

  :hover {
    color: ${({ active }) => (active && colors.skyBlue) || colors.fontDarkGray};
  }
`;

export interface DateChangeArgs {
  startDate: Moment | null;
  endDate: Moment | null;
}

type Period =
  | 'this week'
  | 'last week'
  | 'last 2 weeks'
  | 'this month'
  | 'last month'
  | 'last 6 months'
  | 'this year'
  | 'all time'
  | 'custom date preset';

export interface RenderMonthElementProps {
  month: Moment;
  onMonthSelect: (currentMonth: Moment, newMonthVal: string) => void;
  onYearSelect: (currentMonth: Moment, newYearVal: string) => void;
  isVisible: boolean;
}

type Props = {
  startDate: Moment | null;
  endDate: Moment | null;
  onDateChange: (dateObject: any) => any;
  focusedInput: FocusedInputShape | null;
  onFocusChange(focused: FocusedInputShape | null): void;
  displayPresets?: Array<string>;
  startDateId?: string;
  endDateId?: string;
  isOutsideRange?: (day: any) => boolean;
  minimumNights?: number;
  activePeriodPreset?: string;
  showPresets?: boolean;
  showInnerPresets?: boolean;
  className?: string;
  showPresetsWithDropdown?: boolean;
  hasTimeInterval?: boolean;
} & AnalyticsProps;

const DatePicker = ({
  activePeriodPreset = '',
  onDateChange,
  showPresets = false,
  showInnerPresets = false,
  startDate: startDateProp,
  endDate: endDateProp,
  startDateId = 'startDate',
  endDateId = 'endDate',
  displayPresets = ['default'],
  isOutsideRange = () => false,
  onFocusChange,
  focusedInput,
  className = '',
  minimumNights = 0,
  showPresetsWithDropdown = false,
  hasTimeInterval = false,
  tag = '',
}: Props) => {
  const [activePeriod, setActivePeriod] = useState('');

  const [startHour, setStartHour] = useState('00:00');
  const [endHour, setEndHour] = useState('23:59');

  const [startHours, startMinutes] = timeMinutesSplitter(startHour);
  const [endHours, endMinutes] = timeMinutesSplitter(endHour);

  const [startDateTime, setStartDateTime] = useState(
    addCustomTimeToDate(startDateProp, startHours, startMinutes)
  );
  const [endDateTime, setEndDateTime] = useState(
    addCustomTimeToDate(endDateProp, endHours, endMinutes)
  );

  useEffect(() => {
    setActivePeriod(activePeriodPreset);
  }, []);

  const onPeriodChange = (period: string) => {
    let startDate = moment().startOf('day');
    let endDate = moment().endOf('day');
    let interval = 'day';

    // PERIODS -> presets shown on the left side of the datepicker (past presets)
    // Used mostly in analytics

    // INNERPERIODS -> presets shown inside datepicker (future and past presets)
    switch (period) {
      case PERIODS.TODAY:
        startDate = moment().startOf('day');
        endDate = moment().endOf('day');
        break;
      case PERIODS.ONE_WEEK:
      case INNERPERIODS.LAST_WEEK:
        startDate = startDate.subtract(7, 'days');
        break;
      case PERIODS.TWO_WEEKS:
      case INNERPERIODS.LAST_TWO_WEEKS:
        startDate = startDate.subtract(14, 'days');
        break;
      case PERIODS.ONE_MONTH:
      case INNERPERIODS.LAST_MONTH:
        startDate = startDate.subtract(1, 'months');
        break;
      case PERIODS.SIX_MONTHS:
      case INNERPERIODS.LAST_SIX_MONTHS:
        startDate = startDate.subtract(6, 'months');
        interval = 'month';
        break;
      case PERIODS.ONE_YEAR:
        startDate = startDate.subtract(1, 'year');
        interval = 'month';
        break;
      case PERIODS.ALL:
      case INNERPERIODS.ALL_TIME:
        startDate = moment('2012-01-01').startOf('day');
        interval = 'month';
        break;
      case INNERPERIODS.THIS_WEEK:
        startDate = moment().endOf('day');
        endDate = moment().add(7, 'days');
        break;
      case INNERPERIODS.THIS_MONTH:
        startDate = moment().endOf('day');
        endDate = moment().add(1, 'month');
        break;
      case INNERPERIODS.THIS_YEAR:
        startDate = moment().endOf('day');
        endDate = moment().add(1, 'year');
        break;
      default:
        break;
    }

    onDateChange({ startDate, endDate, interval, period });
  };
  const handleRangeClick = (period: string) => {
    setActivePeriod(period);
    onPeriodChange(period);
  };

  const renderTimeIntervals = () => {
    const onTimePickerChange = (newValue: string, isStartTimePicker?: boolean) => {
      const [hour, minutes] = timeMinutesSplitter(newValue);

      let modifiedStartDate = startDateTime;
      let modifiedEndDate = endDateTime;

      if (isStartTimePicker) {
        setStartHour(newValue);
        modifiedStartDate = addCustomTimeToDate(startDateTime, hour, minutes);
      } else {
        setEndHour(newValue);
        modifiedEndDate = addCustomTimeToDate(endDateTime, hour, minutes);
      }

      onDateChange({ startDate: modifiedStartDate, endDate: modifiedEndDate });
    };
    return (
      <TimeIntervalContainer>
        <TimePicker
          disableClock
          value={startHour}
          onChange={(newValue: any) => onTimePickerChange(newValue, true)}
        />
        <TimePicker
          disableClock
          value={endHour}
          onChange={(newValue: any) => onTimePickerChange(newValue)}
          minTime={startHour}
        />
      </TimeIntervalContainer>
    );
  };

  const renderDatePresets = () => {
    if (hasTimeInterval)
      return (
        <TimeIntervalContainer>
          <TimePicker
            disableClock
            value={startHour}
            onChange={(newValue: any) => setStartHour(newValue)}
          />
          <TimePicker
            disableClock
            value={endHour}
            onChange={(newValue: any) => setEndHour(newValue)}
            minTime={startHour}
          />
        </TimeIntervalContainer>
      );
    if (!showInnerPresets) return '';

    let presets: string[] = [];

    if (displayPresets[0] === 'default') {
      presets = [
        INNERPERIODS.THIS_WEEK,
        INNERPERIODS.LAST_WEEK,
        INNERPERIODS.THIS_MONTH,
        INNERPERIODS.LAST_MONTH,
        INNERPERIODS.THIS_YEAR,
      ];
    } else {
      presets = [...displayPresets];
    }
    return (
      <AnalyticsComponent>
        {({ pages, tracker, merchantId, ip }) => (
          <Styled.DatePresetWrapper>
            {presets.map((text: string) => (
              <Styled.StyledLabel
                active={activePeriod === text}
                key={text}
                onClick={() => {
                  tracker.track({
                    event: AnalyticsEvents.CLICK,
                    type: AnalyticsComponentType.DATEPICKER_PRESET,
                    tag: `datepicker_${snakeCase(text)}`,
                    pages,
                    merchantId,
                    ip,
                  });
                  handleRangeClick(text as Period);
                }}
              >
                {text}
              </Styled.StyledLabel>
            ))}
          </Styled.DatePresetWrapper>
        )}
      </AnalyticsComponent>
    );
  };
  const renderMonthElement = ({ month, onMonthSelect, onYearSelect }: RenderMonthElementProps) => (
    <Styled.CustomMonthContainer>
      <Styled.DropdownContainer>
        <Dropdown
          tag="dropdown_month"
          options={getMonthOptions()}
          value={month.month().toString()}
          onChange={(val: any) => onMonthSelect(month, val)}
        />
      </Styled.DropdownContainer>
      <Styled.DropdownContainer>
        <Dropdown
          tag="dropdown_year"
          options={getYearOptions()}
          value={month.year().toString()}
          onChange={(val: any) => onYearSelect(month, val)}
        />
      </Styled.DropdownContainer>
    </Styled.CustomMonthContainer>
  );

  const handleDateChange = ({ startDate, endDate }: DateChangeArgs) => {
    setStartDateTime(startDate as Moment);
    setEndDateTime(endDate as Moment);

    const [hourStart, minutesStart] = timeMinutesSplitter(startHour);
    const [hourEnd, minutesEnd] = timeMinutesSplitter(endHour);

    const modifiedStartDate = addCustomTimeToDate(startDate, hourStart, minutesStart);
    const modifiedEndDate = addCustomTimeToDate(endDate, hourEnd, minutesEnd);

    onDateChange({ startDate: modifiedStartDate, endDate: modifiedEndDate });
    setActivePeriod('');
  };

  const options: Array<Option> = [
    { value: PERIODS.ONE_MONTH, displayName: '1 month' },
    { value: PERIODS.ONE_WEEK, displayName: '1 week' },
    { value: PERIODS.TWO_WEEKS, displayName: '2 weeks' },
    { value: PERIODS.SIX_MONTHS, displayName: '6 months' },
    { value: PERIODS.ONE_YEAR, displayName: '1 year' },
    { value: PERIODS.TODAY, displayName: 'last 24 hours' },
    { value: PERIODS.ALL, displayName: 'all' },
  ];

  const defaultOption = { displayName: 'Choose period', disabled: true };

  const handleDropdownChange = (value: string) => {
    handleRangeClick(value);
  };

  const renderPeriodElement = (periodConst: string, periodText: string, key: number) => (
    <AnalyticsComponent>
      {({ pages, tracker, merchantId, ip }) => (
        <SpanContainer>
          <StyledSpan
            active={activePeriod === periodConst}
            key={key}
            onClick={() => {
              tracker.track({
                event: AnalyticsEvents.CLICK,
                type: AnalyticsComponentType.DATEPICKER_PRESET,
                tag: `datepicker_${snakeCase(periodConst)}`,
                pages,
                merchantId,
                ip,
              });
              handleRangeClick(periodConst);
            }}
          >
            {periodText}
          </StyledSpan>
          {periodText.toLowerCase() !== 'all' && ' |'}
        </SpanContainer>
      )}
    </AnalyticsComponent>
  );

  if (showPresetsWithDropdown) {
    return (
      <AnalyticsComponent>
        {({ pages, tracker, merchantId, ip }) => (
          <ContentHolder isDropdown>
            <StyledDropdown
              tag="dropdown_presets"
              defaultOption={defaultOption}
              options={options}
              value={activePeriod}
              onChange={handleDropdownChange}
            />
            <DatePickerWrapper
              onClick={() => {
                tracker.track({
                  event: AnalyticsEvents.CLICK,
                  type: AnalyticsComponentType.DATEPICKER,
                  tag,
                  pages,
                  merchantId,
                  ip,
                });
              }}
              showPresetsWithDropdown
              className={className}
            >
              <DateRangePicker
                isOutsideRange={isOutsideRange}
                onDatesChange={({ startDate, endDate }: DateChangeArgs) => {
                  handleDateChange({ startDate, endDate });
                  tracker.track({
                    event: AnalyticsEvents.DATEPICKER_CHANGE,
                    type: AnalyticsComponentType.DATEPICKER,
                    tag: `startDate: ${moment(startDate).format('DD-MM-YYYY')}_endDate: ${moment(
                      endDate
                    ).format('DD-MM-YYYY')}`,
                    pages,
                    merchantId,
                    ip,
                  });
                }}
                onFocusChange={onFocusChange}
                renderMonthElement={renderMonthElement}
                focusedInput={focusedInput}
                startDate={startDateProp}
                startDateId={startDateId}
                endDate={endDateProp}
                endDateId={endDateId}
                customArrowIcon="-"
                calendarInfoPosition="before"
                minimumNights={minimumNights}
                enableOutsideDays
                readOnly
                renderCalendarInfo={renderDatePresets}
                customInputIcon={<FaCalendarAlt />}
                onNextMonthClick={() => {
                  tracker.track({
                    event: AnalyticsEvents.CLICK,
                    type: AnalyticsComponentType.DATEPICKER,
                    tag: 'datepicker_next_month',
                    pages,
                    merchantId,
                    ip,
                  });
                }}
                onPrevMonthClick={() => {
                  tracker.track({
                    event: AnalyticsEvents.CLICK,
                    type: AnalyticsComponentType.DATEPICKER,
                    tag: `datepicker_prev_month`,
                    pages,
                    merchantId,
                    ip,
                  });
                }}
              />
            </DatePickerWrapper>
          </ContentHolder>
        )}
      </AnalyticsComponent>
    );
  }

  if (showPresets) {
    return (
      <AnalyticsComponent>
        {({ pages, tracker, merchantId, ip }) => (
          <ContentHolder>
            <AnalyticsPeriods>
              {renderPeriodElement(PERIODS.TODAY, 'last 24 hours', 6)}
              {renderPeriodElement(PERIODS.ONE_WEEK, '1 week', 0)}
              {renderPeriodElement(PERIODS.TWO_WEEKS, '2 weeks', 1)}
              {renderPeriodElement(PERIODS.ONE_MONTH, '1 month', 2)}
              {renderPeriodElement(PERIODS.SIX_MONTHS, '6 months', 3)}
              {renderPeriodElement(PERIODS.ONE_YEAR, '1 year', 4)}
              {renderPeriodElement(PERIODS.ALL, 'all', 5)}
            </AnalyticsPeriods>
            <DatePickerWrapper
              onClick={() => {
                tracker.track({
                  event: AnalyticsEvents.CLICK,
                  type: AnalyticsComponentType.DATEPICKER,
                  tag,
                  pages,
                  merchantId,
                  ip,
                });
              }}
              className={className}
            >
              <DateRangePicker
                isOutsideRange={isOutsideRange}
                onDatesChange={({ startDate, endDate }: DateChangeArgs) => {
                  handleDateChange({ startDate, endDate });
                  tracker.track({
                    event: AnalyticsEvents.DATEPICKER_CHANGE,
                    type: AnalyticsComponentType.DATEPICKER,
                    tag: `startDate: ${moment(startDate).format('DD-MM-YYYY')}_endDate: ${moment(
                      endDate
                    ).format('DD-MM-YYYY')}`,
                    pages,
                    merchantId,
                    ip,
                  });
                }}
                onFocusChange={onFocusChange}
                renderMonthElement={renderMonthElement}
                focusedInput={focusedInput}
                startDate={startDateProp}
                startDateId={startDateId}
                endDate={endDateProp}
                endDateId={endDateId}
                customArrowIcon="to"
                calendarInfoPosition="before"
                minimumNights={minimumNights}
                enableOutsideDays
                readOnly
                renderCalendarInfo={renderDatePresets}
                onNextMonthClick={() => {
                  tracker.track({
                    event: AnalyticsEvents.CLICK,
                    type: AnalyticsComponentType.DATEPICKER,
                    tag: 'datepicker_next_month',
                    pages,
                    merchantId,
                    ip,
                  });
                }}
                onPrevMonthClick={() => {
                  tracker.track({
                    event: AnalyticsEvents.CLICK,
                    type: AnalyticsComponentType.DATEPICKER,
                    tag: `datepicker_prev_month`,
                    pages,
                    merchantId,
                    ip,
                  });
                }}
              />
            </DatePickerWrapper>
          </ContentHolder>
        )}
      </AnalyticsComponent>
    );
  }

  return (
    <AnalyticsComponent>
      {({ pages, tracker, merchantId, ip }) => (
        <DatePickerWrapper
          onClick={() => {
            tracker.track({
              event: AnalyticsEvents.CLICK,
              type: AnalyticsComponentType.DATEPICKER,
              tag,
              pages,
              merchantId,
              ip,
            });
          }}
          className={className}
        >
          <DateRangePicker
            isOutsideRange={isOutsideRange}
            onDatesChange={({ startDate, endDate }: DateChangeArgs) => {
              handleDateChange({ startDate, endDate });
              tracker.track({
                event: AnalyticsEvents.DATEPICKER_CHANGE,
                type: AnalyticsComponentType.DATEPICKER,
                tag: `startDate: ${moment(startDate).format('DD-MM-YYYY')}_endDate: ${moment(
                  endDate
                ).format('DD-MM-YYYY')}`,
                pages,
                merchantId,
                ip,
              });
            }}
            onFocusChange={onFocusChange}
            renderMonthElement={renderMonthElement}
            focusedInput={focusedInput}
            startDate={startDateProp}
            startDateId={startDateId}
            endDate={endDateProp}
            endDateId={endDateId}
            customArrowIcon="to"
            calendarInfoPosition={hasTimeInterval ? 'bottom' : 'before'}
            minimumNights={minimumNights}
            enableOutsideDays
            readOnly
            renderCalendarInfo={hasTimeInterval ? renderTimeIntervals : renderDatePresets}
            onNextMonthClick={() => {
              tracker.track({
                event: AnalyticsEvents.CLICK,
                type: AnalyticsComponentType.DATEPICKER,
                tag: 'datepicker_next_month',
                pages,
                merchantId,
                ip,
              });
            }}
            onPrevMonthClick={() => {
              tracker.track({
                event: AnalyticsEvents.CLICK,
                type: AnalyticsComponentType.DATEPICKER,
                tag: `datepicker_prev_month`,
                pages,
                merchantId,
                ip,
              });
            }}
          />
        </DatePickerWrapper>
      )}
    </AnalyticsComponent>
  );
};

export default DatePicker;
