import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import moment, { Moment } from 'moment';

import DayPickerWrapper from './DayPickerWrapper';

type Props = {
  // required
  id: string;
  onDateChange: (date: Moment | null) => void;
  onFocusChange: (arg: { focused: boolean | null }) => void;
  focused: boolean | null;
  date: Moment | string | null;

  // input related props
  isOutsideRange?: (day: number) => any;
  style?: Record<string, any>;
  className?: string;
  numberOfMonths?: number;
  disabled?: boolean;
};

const DayPicker = ({
  isOutsideRange = () => false,
  style = {},
  numberOfMonths = 1,
  className = '',
  disabled = false,
  onDateChange,
  onFocusChange,
  focused,
  date,
  id,
}: Props) => (
  <DayPickerWrapper style={style} className={className}>
    <SingleDatePicker
      id={id}
      isOutsideRange={isOutsideRange}
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
      focused={focused}
      date={typeof date === 'string' ? moment(date) : date}
      numberOfMonths={numberOfMonths}
      disabled={disabled}
    />
  </DayPickerWrapper>
);

export default DayPicker;
