// @flow
import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import SingleDatePickerWrapper from './SingleDatePickerWrapper';

type Props = {
  onDateChange: Function,
  onFocChange: Fucntion,
  renderDatePresets: Function,
  focusedInput: string,
  date: string,
};

const SinglePicker = ({
  onDateChange,
  onFocChange,
  renderDatePresets,
  focusedInput,
  date,
}: Props) => (
  <SingleDatePickerWrapper>
    <SingleDatePicker
      date={date}
      onDateChange={onDateChange}
      onFocusChange={onFocChange}
      focused={focusedInput}
      id="1"
    />
  </SingleDatePickerWrapper>
);

export default SinglePicker;
