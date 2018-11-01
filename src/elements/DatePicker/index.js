// @flow
import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

import moment from 'moment';
import DatePickerWrapper from './DatePickerWrapper';
import Label from '../Label';

const THIS_WEEK = 'this week';
const LAST_WEEK = 'last week';
const THIS_MONTH = 'this month';
const LAST_MONTH = 'last month';
const THIS_YEAR = 'this year';

type Props = {
  startDate: string,
  endDate: string,
  calendarInfo: boolean,
  onDateChange: Function,
};

class DatePicker extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      focusedInput: null,
    };
  }

  onFocChange = focusedInput => {
    this.setState({
      focusedInput,
    });
  };

  handleRangeClick = activePeriod => {
    let startDate = moment().startOf('day');
    let endDate = moment().endOf('day');

    switch (activePeriod) {
      case THIS_WEEK:
        endDate = startDate.add(7, 'days');
        startDate = moment().endOf('day');
        break;
      case LAST_WEEK:
        startDate = startDate.subtract(7, 'days');
        break;
      case THIS_MONTH:
        endDate = startDate.add(1, 'month');
        startDate = moment().endOf('day');
        break;
      case LAST_MONTH:
        startDate = startDate.subtract(1, 'months');
        break;
      case THIS_YEAR:
        startDate = startDate.subtract(1, 'year');
        break;
      default:
        break;
    }
    const { onDateChange } = this.props;
    onDateChange({ startDate, endDate });
  };

  renderDatePresets = () => {
    const presets = ['this week', 'last week', 'this month', 'last month', 'this year'];
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
    const { onDateChange, startDate, endDate, calendarInfo } = this.props;

    const { focusedInput } = this.state;
    return (
      <DatePickerWrapper>
        <DateRangePicker
          isOutsideRange={() => false}
          onDatesChange={onDateChange}
          onFocusChange={this.onFocChange}
          renderCalendarInfo={this.renderDatePresets}
          focusedInput={focusedInput}
          startDate={startDate}
          startDateId="1"
          endDate={endDate}
          endDateId="2"
          customArrowIcon="to"
          readOnly
          calendarInfoPosition={calendarInfo && 'before'}
        />
      </DatePickerWrapper>
    );
  }
}

export default DatePicker;
