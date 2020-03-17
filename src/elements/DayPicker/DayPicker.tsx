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
  isOutsideRange,
  onDateChange,
  onFocusChange,
  focused,
  date,
  style,
  className,
  numberOfMonths,
  disabled,
}: Props) => (
  <DayPickerWrapper style={style} className={className}>
    <SingleDatePicker
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

DayPicker.defaultProps = {
  isOutsideRange: () => false,
  style: {},
  className: '',
  numberOfMonths: 1,
  disabled: false,
};

export default DayPicker;
