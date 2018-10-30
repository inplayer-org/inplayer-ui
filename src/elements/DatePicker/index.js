// @flow
import React from 'react';
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
  return (
    <DatePickerWrapper>
      <DateRangePicker
        isOutsideRange={() => false}
        onDatesChange={onDatesChange}
        onFocusChange={onFocusChange}
        focusedInput={focusedInput}
        startDate={startDate}
        endDate={endDate}
        customArrowIcon="to"
      />
    </DatePickerWrapper>
  );
};

export default DatePicker;
