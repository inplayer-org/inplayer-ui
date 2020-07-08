import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker, isInclusivelyAfterDay } from 'react-dates';
import moment, { Moment } from 'moment';

import styled from 'styled-components';
import DayPickerWrapper from './DayPickerWrapper';
import Dropdown from '../Dropdown';
import { getMonthOptions, getYearOptions } from '../../utils/helpers';

const CustomMonthContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DropdownContainer = styled.div`
  margin: 0 0.1rem;
`;

export interface RenderMonthElementProps {
  month: Moment;
  onMonthSelect: (currentMonth: Moment, newMonthVal: string) => void;
  onYearSelect: (currentMonth: Moment, newYearVal: string) => void;
  isVisible: boolean;
}

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
  /**
   * Overwrite the default 'Date' placeholder
   */
  placeholder?: string;
  onClose?: () => any;
  disablePastDays?: boolean;
};

const DayPicker = ({
  isOutsideRange = () => false,
  numberOfMonths = 1,
  disabled = false,
  onDateChange,
  onFocusChange,
  focused,
  date,
  id,
  placeholder,
  onClose,
  disablePastDays = false,
}: Props) => {
  const handleDisablePastDays = (days: any) => !isInclusivelyAfterDay(days, moment());

  const renderMonthElement = ({ month, onMonthSelect, onYearSelect }: RenderMonthElementProps) => (
    <CustomMonthContainer>
      <DropdownContainer>
        <Dropdown
          options={getMonthOptions()}
          value={month.month().toString()}
          onChange={(val: any) => onMonthSelect(month, val)}
        />
      </DropdownContainer>
      <DropdownContainer>
        <Dropdown
          options={getYearOptions()}
          value={month.year().toString()}
          onChange={(val: any) => onYearSelect(month, val)}
        />
      </DropdownContainer>
    </CustomMonthContainer>
  );
  return (
    <DayPickerWrapper>
      <SingleDatePicker
        id={id}
        isOutsideRange={disablePastDays ? handleDisablePastDays : isOutsideRange}
        onDateChange={onDateChange}
        onFocusChange={onFocusChange}
        renderMonthElement={renderMonthElement}
        focused={focused}
        date={typeof date === 'string' ? moment(date) : date}
        numberOfMonths={numberOfMonths}
        disabled={disabled}
        placeholder={placeholder}
        onClose={onClose}
      />
    </DayPickerWrapper>
  );
};

export default DayPicker;
