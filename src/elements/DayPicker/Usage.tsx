import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import DayPicker from './DayPicker';

const DayPickerUsage = () => {
  const momentFormatDate = moment();
  const stringDate = '2014-02-27T10:00:00';
  const [date, setDate] = useState<Moment | null | string>(stringDate);
  const [focused, setFocused] = useState<boolean | null>(false);

  return (
    <DayPicker
      onFocusChange={({ focusedArg }) => setFocused(focusedArg)}
      onDateChange={dateArg => setDate(dateArg)}
      id="date picker"
      date={date}
      focused={focused}
      numberOfMonths={1}
      isOutsideRange={() => false}
    />
  );
};

export default DayPickerUsage;
