// @flow
import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

import DatePickerWrapper from './DatePickerWrapper';

type Props = {
  focusedInput: string,
  startDate: string,
  endDate: string,
  onDateChange: Function,
  onFocChange: Function,
};

const DatePicker = ({ focusedInput, startDate, endDate, onDateChange, onFocChange }: Props) => {
  const onDatesChange = ({ startValue, endValue }) => {
    onDateChange({ startValue, endValue });
  };

  const onFocusChange = input => {
    onFocChange(input);
  };

  const renderDatePresets = () => {
    const presets = [
      'this week',
      'last week',
      'last 7 days',
      'this month',
      'last month',
      'last 30 days',
      'this year',
    ];
    return (
      <div className="datepreset">
        {presets.map((text, i) => (
          <label key={i}>{text}</label>
        ))}
      </div>
    );
  };

  return (
    <DatePickerWrapper>
      <DateRangePicker
        isOutsideRange={() => false}
        onDatesChange={onDatesChange}
        onFocusChange={onFocusChange}
        renderCalendarInfo={renderDatePresets}
        focusedInput={focusedInput}
        startDate={startDate}
        startDateId="1"
        endDate={endDate}
        endDateId="2"
        customArrowIcon="to"
        calendarInfoPosition="before"
      />
    </DatePickerWrapper>
  );
};

export default DatePicker;
