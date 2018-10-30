// @flow
import React from 'react';
import { DateRangePicker } from 'react-dates';

import DatePickerWrapper from './DatePickerWrapper';

type Props = {
  stateFocusedInput: string,
  stateStartDate: string,
  stateEndDate: string,
  onDateChange: Function,
  onFocChange: Function,
};

const DatePicker = ({
  stateFocusedInput,
  stateStartDate,
  stateEndDate,
  onDateChange,
  onFocChange,
}: Props) => {
  const onDatesChange = ({ startDate, endDate }) => {
    onDateChange({ startDate, endDate });
  };

  const onFocusChange = focusedInput => {
    onFocChange(focusedInput);
  };
  return (
    <DatePickerWrapper>
      <DateRangePicker
        isOutsideRange={() => false}
        onDatesChange={onDatesChange}
        onFocusChange={onFocusChange}
        focusedInput={stateFocusedInput}
        startDate={stateStartDate}
        endDate={stateEndDate}
        customArrowIcon="to"
      />
    </DatePickerWrapper>
  );
};

export default DatePicker;
