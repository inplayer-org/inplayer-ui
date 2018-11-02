SingleDatePicker is a component for single day picker.

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
      />
    );
  }
}
<SinglePickerExample />;
```
