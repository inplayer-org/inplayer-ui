// @flow
import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import SingleDayPickerWrapper from './SingleDayPickerWrapper';

type Props = {
  onDateChange: Function,
  date: string,
  isOutsideRange: Function,
  id?: string,
  style?: Object,
  className?: string,
};

type State = {
  focusedInput: string,
};

class SingleDayPicker extends React.Component<Props, State> {
  state = {
    focusedInput: null,
  };

  render() {
    const { date, onDateChange, id, isOutsideRange, style, className } = this.props;
    const { focusedInput } = this.state;

    return (
      <SingleDayPickerWrapper style={style} className={className}>
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
      </SingleDayPickerWrapper>
    );
  }
}

SingleDayPicker.defaultProps = {
  id: 'date',
  style: {},
  className: '',
};

export default SingleDayPicker;
