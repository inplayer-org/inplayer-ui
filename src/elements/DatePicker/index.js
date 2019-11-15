// @flow
import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, FocusedInputShape } from 'react-dates';
import moment, { Moment } from 'moment';

import DateRangePickerWrapper from './DateRangePickerWrapper';
import Label from '../Label';

const THIS_WEEK = 'this week';
const LAST_WEEK = 'last week';
const LAST_TWO_WEEKS = 'last 2 weeks';
const THIS_MONTH = 'this month';
const LAST_MONTH = 'last month';
const THIS_YEAR = 'this year';
const LAST_SIX_MONTHS = 'last 6 months';
const ALL_TIME = 'all time';

type Props = {
  startDate: Moment,
  endDate?: Moment,
  startDateId?: string,
  endDateId?: string,
  isOutsideRange?: Function,
  onDateChange: Function,
  style?: Object,
  className?: string,
  onFocusChange: Function,
  focusedInput: FocusedInputShape | null,
  minimumNights?: number,
  displayPresets?: Array,
  customAllTimePreset?: number,
};

type Period =
  | THIS_WEEK
  | LAST_WEEK
  | LAST_TWO_WEEKS
  | THIS_MONTH
  | LAST_MONTH
  | LAST_SIX_MONTHS
  | THIS_YEAR
  | ALL_TIME;

class DatePicker extends React.Component<Props> {
  handleRangeClick = (activePeriod: Period) => {
    const { customAllTimePreset } = this.props;
    let startDate = moment().startOf('day');
    let endDate = moment().endOf('day');

    const allTimeStartDate = customAllTimePreset
      ? moment(customAllTimePreset * 1000)
      : startDate.subtract(3, 'year');

    switch (activePeriod) {
      case THIS_WEEK:
        endDate = startDate.add(7, 'days');
        startDate = moment().endOf('day');
        break;
      case LAST_WEEK:
        startDate = startDate.subtract(7, 'days');
        break;
      case LAST_TWO_WEEKS:
        startDate = startDate.subtract(14, 'days');
        break;
      case THIS_MONTH:
        endDate = startDate.add(1, 'month');
        startDate = moment().endOf('day');
        break;
      case LAST_MONTH:
        startDate = startDate.subtract(1, 'months');
        break;
      case LAST_SIX_MONTHS:
        startDate = startDate.subtract(6, 'months');
        break;
      case THIS_YEAR:
        startDate = startDate.subtract(1, 'year');
        break;
      case ALL_TIME:
        startDate = allTimeStartDate;
        break;
      default:
        break;
    }
    const { onDateChange } = this.props;
    onDateChange({ startDate, endDate });
  };

  renderDatePresets = () => {
    const { displayPresets } = this.props;
    let presets = [];
    if (displayPresets.includes('default')) {
      presets = [THIS_WEEK, LAST_WEEK, THIS_MONTH, LAST_MONTH, THIS_YEAR];
    } else {
      presets = [...displayPresets];
    }

    return (
      <div className="datepreset">
        {presets.map((text, i) => (
          <Label key={i} onClick={() => this.handleRangeClick(text)}>
            {text}
          </Label>
        ))}
      </div>
    );
  };

  render() {
    const {
      onDateChange,
      startDate,
      endDate,
      displayPresets,
      startDateId,
      endDateId,
      isOutsideRange,
      style,
      className,
      onFocusChange,
      focusedInput,
      minimumNights,
    } = this.props;

    const hasPresets = displayPresets.length !== 0;
    return (
      <DateRangePickerWrapper style={style} className={className}>
        <DateRangePicker
          isOutsideRange={isOutsideRange}
          onDatesChange={onDateChange}
          onFocusChange={onFocusChange}
          renderCalendarInfo={this.renderDatePresets}
          focusedInput={focusedInput}
          startDate={startDate}
          startDateId={startDateId || 'startDate'}
          endDate={endDate}
          endDateId={endDateId || 'endDate'}
          customArrowIcon="to"
          readOnly
          calendarInfoPosition={hasPresets && 'before'}
          minimumNights={minimumNights}
        />
      </DateRangePickerWrapper>
    );
  }
}

DatePicker.defaultProps = {
  endDate: null,
  startDateId: 'startDate',
  endDateId: 'endDate',
  calendarInfo: false,
  isOutsideRange: () => false,
  style: {},
  className: '',
  minimumNights: 0,
  displayPresets: ['default'],
  customAllTimePreset: moment()
    .startOf('day')
    .subtract(3, 'year'),
};

export default DatePicker;
