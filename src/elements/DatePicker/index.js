// @flow
import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

import DatePickerWrapper from './DatePickerWrapper';
import Label from '../Label';

type Props = {
  focusedInput: string,
  startDate: string,
  endDate: string,
  activePeriod: string,
  calendarInfo: boolean,
  onDateChange: Function,
  onFocChange: Function,
  handleRangeClick: Function,
};

const DatePicker = ({
  focusedInput,
  startDate,
  endDate,
  calendarInfo,
  activePeriod,
  onDateChange,
  onFocChange,
  handleRangeClick,
}: Props) => {
  const renderDatePresets = () => {
    const presets = ['this week', 'last week', 'this month', 'last month', 'this year'];
    return (
      <div className="datepreset">
        {presets.map((text, i) => (
          <Label key={i} onClick={() => handleRangeClick(text)}>
            {text}
          </Label>
        ))}
      </div>
    );
  };

  return (
    <DatePickerWrapper>
      <DateRangePicker
        isOutsideRange={() => false}
        onDatesChange={onDateChange}
        onFocusChange={onFocChange}
        renderCalendarInfo={renderDatePresets}
        focusedInput={focusedInput}
        startDate={startDate}
        startDateId="1"
        endDate={endDate}
        endDateId="2"
        customArrowIcon="to"
        readOnly
        calendarInfoPosition={calendarInfo && 'before'}
      />
    </DatePickerWrapper>
  );
};

export default DatePicker;
