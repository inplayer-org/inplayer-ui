import React, { useState, useEffect } from 'react';
import moment, { Moment } from 'moment';
import { FocusedInputShape, DateRangePicker } from 'react-dates';
import DatePickerWrapper from 'elements/DatePicker/DatePickerWrapper';
import { PERIODS } from './periods';
import { Styled } from './styles';
import 'react-dates/initialize';

interface DateChangeArgs {
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
  onDateChange(arg: DateChangeArgs): void;
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
  customAllTimeDate,
  onDateChange,
  showPresets = false,
  displayPresets = ['default'],
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

  const handleRangeClick = (period: Period) => {
    setActivePeriod(period);
    let startDate = moment().startOf('day');
    let endDate = moment().endOf('day');
    const allTimeStartDate = !customAllTimeDate ? startDate.subtract(3, 'year') : customAllTimeDate;

    switch (period) {
      case PERIODS.THIS_WEEK:
        endDate = moment().add(7, 'days');
        startDate = moment().endOf('day');
        break;
      case PERIODS.LAST_WEEK:
        startDate = moment().subtract(7, 'days');
        break;
      case PERIODS.LAST_TWO_WEEKS:
        startDate = moment().subtract(14, 'days');
        break;
      case PERIODS.THIS_MONTH:
        endDate = moment().add(1, 'month');
        startDate = moment().endOf('day');
        break;
      case PERIODS.LAST_MONTH:
        startDate = moment().subtract(1, 'months');
        break;
      case PERIODS.LAST_SIX_MONTHS:
        startDate = moment().subtract(6, 'months');
        break;
      case PERIODS.THIS_YEAR:
        startDate = moment().subtract(1, 'year');
        break;
      case PERIODS.ALL_TIME:
        startDate = allTimeStartDate;
        break;
      default:
        break;
    }
    onDateChange({ startDate, endDate });
  };

  const renderDatePresets = () => {
    if (!showPresets) return '';

    let presets = [];

    if (displayPresets[0] === 'default') {
      presets = [
        PERIODS.THIS_WEEK,
        PERIODS.LAST_WEEK,
        PERIODS.THIS_MONTH,
        PERIODS.LAST_MONTH,
        PERIODS.THIS_YEAR,
      ];
    } else {
      presets = [...displayPresets];
    }

    return (
      <Styled.DatePresetWrapper>
        {presets.map((text: string) => (
          <Styled.StyledLabel
            active={activePeriod === text}
            key={text}
            onClick={() => handleRangeClick(text as Period)}
          >
            {text}
          </Styled.StyledLabel>
        ))}
      </Styled.DatePresetWrapper>
    );
  };

  const handleDateChange = ({ startDate, endDate }: DateChangeArgs) => {
    setActivePeriod(PERIODS.CUSTOM);
    onDateChange({ startDate, endDate });
  };

  return (
    <DatePickerWrapper>
      <DateRangePicker
        isOutsideRange={isOutsideRange}
        onDatesChange={handleDateChange}
        onFocusChange={onFocusChange}
        renderCalendarInfo={renderDatePresets}
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
  );
};

export default DatePicker;
