// @flow
import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import SingleDatePickerWrapper from './SingleDatePickerWrapper';

type Props = {
  onDateChange: Function,
  onFocusedInputChange: Function,
  renderDatePresets: Function,
  focusedInput: string,
  date: string,
};

const SinglePicker = ({
  onDateChange,
  onFocusedInputChange,
  renderDatePresets,
  focusedInput,
  date,
}: Props) => (
  <SingleDatePickerWrapper>
    <SingleDatePicker
      date={date}
      onDateChange={onDateChange}
      onFocusChange={onFocusedInputChange}
      focused={focusedInput}
      numberOfMonths={1}
      id="date"
      readOnly
    />
  </SingleDatePickerWrapper>
);

export default SinglePicker;
