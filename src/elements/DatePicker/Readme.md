DatePicker is a component for picking range for dates. It takes a `startDate` and `endDate` as a prop( momentPropTypes.momentObj or null), `startDateId` and `endDateId`, `calendarInfo` prop which can be a boolean (if true, the presets are shown).

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

  render() {
    return (
      <DatePicker
        startDate={this.state.startDate}
        startDateId="startDate"
        endDate={this.state.endDate}
        endDateId="endDate"
        onDateChange={this.onDateChange}
        calendarInfo={true}
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
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange({ startDate, endDate }) {
    this.setState({
      startDate,
      endDate,
    });
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
      />
    );
  }
}
<DatePickerExample />;
```
