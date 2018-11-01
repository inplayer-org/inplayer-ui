SingleDatePicker is a component for single day picker. You can use it directly like this:

```jsx static
const moment = require('moment');
import { SinglePicker } from '@inplayer-org/inplayer-ui';

class SinglePicker extends React.Component {
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

  onFocChange = focusedInput => {
    this.setState({
      focusedInput,
    });
  };

  render() {
    return (
      <SinglePicker
        startDate={this.state.startDate}
        startDateId={1}
        endDate={this.state.endDate}
        focusedInput={this.state.focusedInput}
        endDateId={2}
        onDateChange={this.onDateChange}
        onFocChange={this.onFocChange}
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
      startDate: moment().subtract(1, 'month'),
      endDate: moment(),
      focusedInput: null,
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocChange = this.onFocChange.bind(this);
  }

  onDateChange({ startDate, endDate }) {
    this.setState({
      startDate,
      endDate,
    });
  }

  onFocChange(focusedInput) {
    this.setState({
      focusedInput,
    });
  }

  render() {
    return (
      <SinglePicker
        date={this.state.date}
        focusedInput={this.state.focusedInput}
        onDateChange={this.onDateChange}
        onFocChange={this.onFocChange}
      />
    );
  }
}
<SinglePickerExample />;
```
