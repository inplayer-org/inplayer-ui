SingleDayPicker is a component for picking single day. It takes:
<br>-`date` as a prop( momentPropTypes.momentObj or null)
<br>-`focused` as a prop( momentPropTypes.boolean)
<br>- `isOutsideRange` a function which specifies the days that are not allowed to be choosed (ex. isOutsideRange={day => day.isBefore(moment())}).
<br>- `onFocusChange` a function which controls whether or not the input is focused
<br>- `onDateChange` function for setting the state for the dates

```jsx static
const moment = require('moment');

class SingleDayPickerExample extends React.Component {
  constructor() {
    super();

    this.state = {
      date: moment(),
      focused: false,
    };
  }

  render() {
    return (
      <SingleDayPicker
        date={this.state.date}
        focused={this.state.focused}
        isOutsideRange={() => false}
        onFocusChange={({ focused }) => this.setState({ focused })}
        onDateChange={date => this.setState({ date })}
      />
    )
  }
}
<SingleDayPickerExample />;
```

### Demo

```jsx
const moment = require('moment');

class SingleDayPickerExample extends React.Component {
  constructor() {
    super();

    this.state = {
      date: moment(),
      focused: false,
    };
  }

  render() {
    return (
      <SingleDayPicker
        date={this.state.date}
        focused={this.state.focused}
        isOutsideRange={() => false}
        onFocusChange={({ focused }) => this.setState({ focused })}
        onDateChange={date => this.setState({ date })}
      />
    )
  }
}
<SingleDayPickerExample />;
```