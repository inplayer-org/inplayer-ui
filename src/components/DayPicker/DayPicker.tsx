import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker, isInclusivelyAfterDay } from 'react-dates';
import moment, { Moment } from 'moment';

import styled from 'styled-components';
import DayPickerWrapper from './DayPickerWrapper';
import Dropdown from '../Dropdown';
import { getMonthOptions, getYearOptions } from '../../utils/helpers';
import {
  AnalyticsComponent,
  AnalyticsComponentType,
  AnalyticsEvents,
  AnalyticsProps,
} from '../../analytics';

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
  id: string;
  onDateChange: (date: Moment | null) => void;
  onFocusChange: (arg: { focused: boolean | null }) => void;
  focused: boolean | null;
  date: Moment | string | null;
  isOutsideRange?: (day: number) => any;
  numberOfMonths?: number;
  disabled?: boolean;
  placeholder?: string;
  onClose?: () => any;
  disablePastDays?: boolean;
  displayFormat?: string;
} & AnalyticsProps;

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
  displayFormat = 'DD/MM/YYYY',
  tag = '',
}: Props) => {
  const handleDisablePastDays = (days: any) => !isInclusivelyAfterDay(days, moment());

  const renderMonthElement = ({ month, onMonthSelect, onYearSelect }: RenderMonthElementProps) => (
    <CustomMonthContainer>
      <DropdownContainer>
        <Dropdown
          tag="dropdown_month"
          options={getMonthOptions()}
          value={month.month().toString()}
          onChange={(val: any) => onMonthSelect(month, val)}
        />
      </DropdownContainer>
      <DropdownContainer>
        <Dropdown
          tag="dropdown_year"
          options={getYearOptions()}
          value={month.year().toString()}
          onChange={(val: any) => onYearSelect(month, val)}
        />
      </DropdownContainer>
    </CustomMonthContainer>
  );
  return (
    <AnalyticsComponent>
      {({ pages, tracker, merchantId, ip }) => (
        <DayPickerWrapper
          onClick={() => {
            tracker.track({
              event: AnalyticsEvents.CLICK,
              type: AnalyticsComponentType.DAYPICKER,
              tag,
              pages,
              merchantId,
              ip,
            });
          }}
        >
          <SingleDatePicker
            displayFormat={displayFormat}
            id={id}
            isOutsideRange={disablePastDays ? handleDisablePastDays : isOutsideRange}
            onDateChange={(dateChanged: Moment | null) => {
              tracker.track({
                event: AnalyticsEvents.DATEPICKER_CHANGE,
                type: AnalyticsComponentType.DATEPICKER,
                tag: `date: ${moment(dateChanged).format('DD-MM-YYYY')}`,
                pages,
                merchantId,
                ip,
              });
              onDateChange(dateChanged);
            }}
            onFocusChange={onFocusChange}
            renderMonthElement={renderMonthElement}
            focused={focused}
            date={date ? moment(date) : null}
            numberOfMonths={numberOfMonths}
            disabled={disabled}
            placeholder={placeholder}
            onClose={onClose}
            onNextMonthClick={() => {
              tracker.track({
                event: AnalyticsEvents.CLICK,
                type: AnalyticsComponentType.DAYPICKER,
                tag: 'daypicker_next_month',
                pages,
                merchantId,
                ip,
              });
            }}
            onPrevMonthClick={() => {
              tracker.track({
                event: AnalyticsEvents.CLICK,
                type: AnalyticsComponentType.DAYPICKER,
                tag: `daypicker_prev_month`,
                pages,
                merchantId,
                ip,
              });
            }}
          />
        </DayPickerWrapper>
      )}
    </AnalyticsComponent>
  );
};

export default DayPicker;
