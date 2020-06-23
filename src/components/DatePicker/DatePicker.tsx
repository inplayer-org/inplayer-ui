import React, { useState, useEffect } from 'react';
import moment, { Moment } from 'moment';
import styled from 'styled-components';
import { FocusedInputShape, DateRangePicker } from 'react-dates';
import colors from '../../theme/colors';
import { getMonthOptions, getYearOptions } from '../../utils/helpers';
import Dropdown from '../Dropdown';
import DatePickerWrapper from './DatePickerWrapper';
import { PERIODS } from './periods';
import { Styled } from './styles';
import 'react-dates/initialize';

const Container = styled.div`
  margin-bottom: 1.3rem;
`;

const ContentHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 86%;
  margin: 0 auto;
  padding: 15px 0 15px;
`;

const DatePickerContainer = styled.div`
  display: inline-block;
  width: auto;
  min-width: 14%;
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

interface DateChangeArgs {
  startDate: Moment | null;
  endDate: Moment | null;
}

export interface RenderMonthElementProps {
  month: Moment;
  onMonthSelect: (currentMonth: Moment, newMonthVal: string) => void;
  onYearSelect: (currentMonth: Moment, newYearVal: string) => void;
  isVisible: boolean;
}

type Props = {
  /**
   * Start date
   */
  startDate: Moment | null;
  /**
   * End date
   */
  endDate: Moment | null;
  /**
   * Function which takes `startDate` and `endDate` as arguments and sets the date range to the corresponding dates
   */
  onDateChange: (dateObject: any) => any;
  /**
   * It can be either `startDate` or `endDate`
   */
  focusedInput: FocusedInputShape | null;
  /**
   * Function which takes a boolean argument on whether it is focused or not
   */
  onFocusChange(focused: FocusedInputShape | null): void;
  displayPresets?: Array<string>;
  startDateId?: string;
  endDateId?: string;
  /**
   * Function which specifies the days that are not allowed to be choosed
   * (ex. isOutsideRange={day => day.isBefore(moment())})
   */
  isOutsideRange?: (day: any) => boolean;
  minimumNights?: number;
  customAllTimeDate?: Moment;
  activePeriodPreset?: string;
  /**
   * Boolean indicating whether to show presets or not
   */
  showPresets?: boolean;
};

const DatePicker = ({
  activePeriodPreset = '',
  onDateChange,
  showPresets = false,
  startDate: startDateProp,
  endDate: endDateProp,
  startDateId = 'startDate',
  endDateId = 'endDate',
  isOutsideRange = () => false,
  onFocusChange,
  focusedInput,
  minimumNights,
}: Props) => {
  const [activePeriod, setActivePeriod] = useState('');

  useEffect(() => {
    setActivePeriod(activePeriodPreset);
  }, []);

  const onPeriodChange = (period: string) => {
    let startDate = moment().startOf('day');
    let endDate = moment().endOf('day');
    let interval = 'day';

    switch (period) {
      case PERIODS.TODAY:
        startDate = moment().startOf('day');
        endDate = moment().endOf('day');
        break;
      case PERIODS.ONE_WEEK:
        startDate = startDate.subtract(7, 'days');
        break;
      case PERIODS.TWO_WEEKS:
        startDate = startDate.subtract(14, 'days');
        break;
      case PERIODS.ONE_MONTH:
        startDate = startDate.subtract(1, 'months');
        break;
      case PERIODS.SIX_MONTHS:
        startDate = startDate.subtract(6, 'months');
        interval = 'month';
        break;
      case PERIODS.ONE_YEAR:
        startDate = startDate.subtract(1, 'year');
        interval = 'month';
        break;
      case PERIODS.ALL:
        startDate = startDate.subtract(2, 'year');
        interval = 'month';
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

  const renderMonthElement = ({ month, onMonthSelect, onYearSelect }: RenderMonthElementProps) => (
    <Styled.CustomMonthContainer>
      <Styled.DropdownContainer>
        <Dropdown
          options={getMonthOptions()}
          value={month.month().toString()}
          onChange={(val: any) => onMonthSelect(month, val)}
        />
      </Styled.DropdownContainer>
      <Styled.DropdownContainer>
        <Dropdown
          options={getYearOptions()}
          value={month.year().toString()}
          onChange={(val: any) => onYearSelect(month, val)}
        />
      </Styled.DropdownContainer>
    </Styled.CustomMonthContainer>
  );

  const handleDateChange = ({ startDate, endDate }: DateChangeArgs) => {
    onDateChange({ startDate, endDate });
  };

  const renderPeriodElement = (periodConst: string, periodText: string, key: number) => (
    <SpanContainer>
      <StyledSpan
        active={activePeriod === periodConst}
        key={key}
        onClick={() => handleRangeClick(periodConst)}
      >
        {periodText}
      </StyledSpan>
      {periodText.toLowerCase() !== 'all' && ' |'}
    </SpanContainer>
  );
  return (
    <Container>
      <ContentHolder>
        {showPresets && (
          <AnalyticsPeriods>
            {renderPeriodElement(PERIODS.TODAY, 'last 24 hours', 6)}
            {renderPeriodElement(PERIODS.ONE_WEEK, '1 Week', 0)}
            {renderPeriodElement(PERIODS.TWO_WEEKS, '2 Weeks', 1)}
            {renderPeriodElement(PERIODS.ONE_MONTH, '1 Month', 2)}
            {renderPeriodElement(PERIODS.SIX_MONTHS, '6 Months', 3)}
            {renderPeriodElement(PERIODS.ONE_YEAR, '1 Year', 4)}
            {renderPeriodElement(PERIODS.ALL, 'ALL', 5)}
          </AnalyticsPeriods>
        )}
        <DatePickerContainer>
          <DatePickerWrapper>
            <DateRangePicker
              isOutsideRange={isOutsideRange}
              onDatesChange={handleDateChange}
              onFocusChange={onFocusChange}
              renderMonthElement={renderMonthElement}
              focusedInput={focusedInput}
              startDate={startDateProp}
              startDateId={startDateId}
              endDate={endDateProp}
              endDateId={endDateId}
              customArrowIcon="to"
              calendarInfoPosition="after"
              minimumNights={minimumNights}
              enableOutsideDays
              readOnly
            />
          </DatePickerWrapper>
        </DatePickerContainer>
      </ContentHolder>
    </Container>
  );
};

export default DatePicker;
