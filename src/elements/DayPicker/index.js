// @flow
import React from 'react';
import 'react-dates/initialize';
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

const SingleDayPicker = ({
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

SingleDayPicker.defaultProps = {
  isOutsideRange: () => false,
  style: {},
  className: '',
};

export default SingleDayPicker;
