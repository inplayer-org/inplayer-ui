/* eslint-disable react/destructuring-assignment */
import React from 'react';
import DatePicker from './index';
import moment from '../../../../../.cache/typescript/3.7/node_modules/moment/moment';

export default {
  component: DatePicker,
  title: 'DatePicker',
};

class DatePickerExample extends React.Component {
  constructor() {
    super();

    this.state = {
      startDate: moment().subtract(1, 'month'),
      endDate: moment(),
      focusedInput: null,
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange({ startDate, endDate }) {
    this.setState({
      startDate,
      endDate,
    });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {
    return (
      <DatePicker
        startDate={this.state.startDate}
        startDateId="startDate"
        endDate={this.state.endDate}
        endDateId="endDate"
        onDateChange={this.onDateChange}
        displayPresets={['default']}
        isOutsideRange={() => false}
        onFocusChange={this.onFocusChange}
        focusedInput={this.state.focusedInput}
        customAllTimeDate={1514208111}
        activePeriodPreset="last month"
      />
    );
  }
}

export const DatePickerUsage = () => <DatePickerExample />;
