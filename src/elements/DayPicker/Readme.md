DayPicker is a component for picking single day. It takes:
<br>-`date` as a prop( momentPropTypes.momentObj, string or null)
<br>-`focused` as a prop( PropTypes.boolean)
<br>- `isOutsideRange` a function which specifies the days that are not allowed to be choosed (ex. isOutsideRange={day => day.isBefore(moment())}).
<br>- `onFocusChange` a function which controls whether or not the input is focused
<br>- `onDateChange` function for setting the state for the dates
<br>- `numberOfMonths` as a prop (PropTypes.number) - controls the number of the displayed months

```jsx static
const moment = require('moment');

class DayPickerExample extends React.Component {
  constructor() {
    super();

    this.state = {
      date: moment(),
      focused: false,
    };
  }

  render() {
    return (
      <DayPicker
        date={this.state.date}
        focused={this.state.focused}
        numberOfMonths={1}
        isOutsideRange={() => false}
        onFocusChange={({ focused }) => this.setState({ focused })}
        onDateChange={date => this.setState({ date })}
      />
    )
  }
}
<DayPickerExample />;
```

### Demo

```jsx
const moment = require('moment');

class DayPickerExample extends React.Component {
  constructor() {
    super();

    this.state = {
      date: moment(),
      focused: false,
    };
  }

  render() {
    return (
      <DayPicker
        date={this.state.date}
        focused={this.state.focused}
        numberOfMonths={1}
        isOutsideRange={() => false}
        onFocusChange={({ focused }) => this.setState({ focused })}
        onDateChange={date => this.setState({ date })}
      />
    )
  }
}
<DayPickerExample />;
```

```jsx

class DayPickerExample extends React.Component {
  constructor() {
    super();

    this.state = {
      date: '02-03-1990',
      focused: false,
    };
  }

  render() {
    return (
      <DayPicker
        date={this.state.date}
        focused={this.state.focused}
        numberOfMonths={1}
        isOutsideRange={() => false}
        onFocusChange={({ focused }) => this.setState({ focused })}
        onDateChange={date => this.setState({ date })}
      />
    )
  }
}
<DayPickerExample />;
```