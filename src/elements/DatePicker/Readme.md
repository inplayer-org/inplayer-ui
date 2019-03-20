DatePicker is a component for picking range for dates. It takes:
<br>-`startDate` and `endDate` as a prop( momentPropTypes.momentObj or null)
<br>- `startDateId` and `endDateId`
<br>- `onDateChange` function for setting the state for the dates
<br>- `calendarInfo` prop which can be a boolean (if true, the presets are shown),
<br>- `isOutsideRange` a function which specifies the days that are not allowed to be choosed (ex. isOutsideRange={day => day.isBefore(moment())}).

```jsx static
const moment = require('moment');

class DatePicker extends React.Component {
  constructor() {
    super();

    this.state = {
      startDate: moment().subtract(1, 'month'),
      endDate: moment(),
      focusedInput: null,
    };
  }

  onDateChange = ({ startDate, endDate }) => {
    this.setState({
      startDate,
      endDate,
    });
  };

  onFocusChange = (focusedInput) => {
    this.setState({ focusedInput });
  };

  render() {
    return (
      <DatePicker
        startDate={this.state.startDate}
        startDateId="startDate"
        endDate={this.state.endDate}
        endDateId="endDate"
        onDateChange={this.onDateChange}
        calendarInfo={true}
        isOutsideRange={() => false}
        onFocusChange={this.onFocusChange}
        focusedInput={this.state.focusedInput}
      />
    );
  }
}
<DatePickerExample />;
```

### Demo

```jsx
const moment = require('moment');

class DatePickerExample extends React.Component {
  constructor() {
    super();

    this.state = {
      startDate: moment().subtract(1, 'month'),
      endDate: moment(),
      focusedInput: null,
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange({ startDate, endDate }) {
    this.setState({
      startDate,
      endDate,
    });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {
    return (
      <DatePicker
        startDate={this.state.startDate}
        startDateId="startDate"
        endDate={this.state.endDate}
        endDateId="endDate"
        onDateChange={this.onDateChange}
        calendarInfo={true}
        isOutsideRange={() => false}
        onFocusChange={this.onFocusChange}
        focusedInput={this.state.focusedInput}
      />
    );
  }
}
<DatePickerExample />;
```
