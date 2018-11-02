// @flow
import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import SingleDayPickerWrapper from './SingleDayPickerWrapper';

type Props = {
  onDateChange: Function,
  date: string,
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
    const { date, onDateChange, id } = this.props;
    const { focusedInput } = this.state;

    return (
      <SingleDayPickerWrapper>
        <SingleDatePicker
          id={id || 'date'}
          date={date}
          onDateChange={onDateChange}
          onFocusChange={({ focused }) => this.setState({ focusedInput: focused })}
          focused={focusedInput}
          numberOfMonths={1}
          readOnly
        />
      </SingleDayPickerWrapper>
    );
  }
}

SingleDayPicker.defaultProps = {
  id: 'date',
};

export default SingleDayPicker;
