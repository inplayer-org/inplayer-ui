SingleDayPicker is a component for single day picker. It takes:
<br>-`date` as a prop( momentPropTypes.momentObj or null)
<br>- `id` of the date
<br>- `onDateChange` function for settning the state for the date
<br>- `isOutsideRange` is a function which specifies the days that are to be choosed (ex. isOutsideRange={day => day.isBefore(moment())}).

```jsx static
const moment = require('moment');

class SingleDayPicker extends React.Component {
  constructor() {
    super();

    this.state = {
      date: moment(),
    };
  }

  onDateChange = date => {
    this.setState({
      date,
    });
  };

  render() {
    return (
      <SingleDayPicker
        date={this.state.date}
        id="date"
        onDateChange={this.onDateChange}
        isOutsideRange={() => false}
      />
    );
  }
}
```

### Demo

```jsx
const moment = require('moment');

class SinglePickerExample extends React.Component {
  constructor() {
    super();

    this.state = {
      date: moment(),
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      date,
    });
  }

  render() {
    return (
      <SingleDayPicker
        id="date"
        date={this.state.date}
        onDateChange={this.onDateChange}
        isOutsideRange={() => false}
      />
    );
  }
}
<SinglePickerExample />;
```
