/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Moment } from 'moment';
import DayPicker from './DayPicker';

const DayPickerUsage = () => {
  const stringDate = '2014-02-27T10:00:00';
  const [date, setDate] = useState<Moment | null | string>(stringDate);
  const [focused, setFocused] = useState<boolean | null>(false);

  return (
    <DayPicker
      onFocusChange={({ focused }) => setFocused(focused)}
      onDateChange={(date) => setDate(date)}
      id="date picker"
      date={date}
      focused={focused}
      numberOfMonths={1}
      isOutsideRange={() => false}
    />
  );
};

export default DayPickerUsage;
