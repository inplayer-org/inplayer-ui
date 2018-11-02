// @flow
import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import SingleDayPickerWrapper from './SingleDayPickerWrapper';
import DatePickerWrapper from '../DatePickerWrapper';

type Props = {
  onDateChange: Function,
  date: string,
  isOutsideRange: Function,
  id?: string,
};

class SingleDayPicker extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      focusedInput: null,
    };
  }

  render() {
    const { date, onDateChange, id, isOutsideRange } = this.props;
    const { focusedInput } = this.state;

    return (
      <SingleDayPickerWrapper>
        <DatePickerWrapper>
          <SingleDatePicker
            isOutsideRange={isOutsideRange}
            id={id || 'date'}
            date={date}
            onDateChange={onDateChange}
            onFocusChange={({ focused }) => this.setState({ focusedInput: focused })}
            focused={focusedInput}
            numberOfMonths={1}
            readOnly
          />
        </DatePickerWrapper>
      </SingleDayPickerWrapper>
    );
  }
}

SingleDayPicker.defaultProps = {
  id: 'date',
};

export default SingleDayPicker;
