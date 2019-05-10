// @flow
import React from 'react';
import { SingleDatePicker } from 'react-dates';
import { Moment } from 'moment';

import DatePickerWrapper from '../DatePickerWrapper';

type Props = {
  isOutsideRange?: (day: number) => any,
  onDateChange: (date: Moment) => any,
  onFocusChange: (focused: any) => any,
  focused: boolean,
  date: Moment,
  style?: Object,
  className?: string,
};

const DayPicker = ({
  isOutsideRange,
  onDateChange,
  onFocusChange,
  focused,
  date,
  style,
  className,
}: Props) => (
  <DatePickerWrapper style={style} className={className}>
    <SingleDatePicker
      isOutsideRange={isOutsideRange}
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
      focused={focused}
      date={date}
      numberOfMonths={1}
    />
  </DatePickerWrapper>
);

DayPicker.defaultProps = {
  isOutsideRange: () => false,
  style: {},
  className: '',
};

export default DayPicker;
