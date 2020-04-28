import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import moment, { Moment } from 'moment';

import DayPickerWrapper from './DayPickerWrapper';

type Props = {
  // required
  /**
   * DayPicker id
   */
  id: string;
  /**
   * Function which takes `date` as argument and sets the current date
   */
  onDateChange: (date: Moment | null) => void;
  /**
   * Function which takes a boolean argument on whether it is focused or not
   */
  onFocusChange: (arg: { focused: boolean | null }) => void;
  /**
   * Focused DayPicker
   */
  focused: boolean | null;
  /**
   * Date
   */
  date: Moment | string | null;
  // input related props
  isOutsideRange?: (day: number) => any;
  /**
   * Number of months to show
   */
  numberOfMonths?: number;
  /**
   * Disabled DayPicker
   */
  disabled?: boolean;
};

const DayPicker: React.FC<Props> = ({
  isOutsideRange = () => false,
  numberOfMonths = 1,
  disabled = false,
  onDateChange,
  onFocusChange,
  focused,
  date,
  id,
}) => (
  <DayPickerWrapper>
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
