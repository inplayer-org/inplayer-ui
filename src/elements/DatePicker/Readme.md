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
      activePeriod: LAST_MONTH,
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

  handleRangeClick = activePeriod => {
    this.setState({ activePeriod });
    let startDate = moment().startOf('day');
    let endDate = moment().endOf('day');

    switch (activePeriod) {
      case THIS_WEEK:
        endDate = startDate.add(7, 'days');
        startDate = moment().endOf('day');
      case LAST_WEEK:
        startDate = startDate.subtract(7, 'days');
        break;
      case THIS_MONTH:
        endDate = startDate.add(1, 'month');
        startDate = moment().endOf('day');
        break;
      case LAST_MONTH:
        startDate = startDate.subtract(1, 'months');
        break;
      case THIS_YEAR:
        startDate = startDate.subtract(1, 'year');
        break;
      default:
        break;
    }

    this.onDateChange({ startDate, endDate });
  };

  render() {
    return (
      <DatePicker
        startDate={this.state.startDate}
        startDateId={1}
        endDate={this.state.endDate}
        focusedInput={this.state.focusedInput}
        endDateId={2}
        onDateChange={this.onDateChange}
        onFocChange={this.onFocChange}
        handleRangeClick={this.handleRangeClick}
        calendarInfo={true}
        activePeriod={this.state.activePeriod}
      />
    );
  }
}
<DatePickerExample />;
```

### Demo

```jsx
const moment = require('moment');

const THIS_WEEK = 'this week';
const LAST_WEEK = 'last week';
const THIS_MONTH = 'this month';
const LAST_MONTH = 'last month';
const THIS_YEAR = 'this year';

class DatePickerExample extends React.Component {
  constructor() {
    super();

    this.state = {
      startDate: moment().subtract(1, 'month'),
      endDate: moment(),
      focusedInput: null,
      activePeriod: LAST_MONTH,
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocChange = this.onFocChange.bind(this);
    this.handleRangeClick = this.handleRangeClick.bind(this);
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

  handleRangeClick(activePeriod) {
    this.setState({ activePeriod });
    let startDate = moment().startOf('day');
    let endDate = moment().endOf('day');

    switch (activePeriod) {
      case THIS_WEEK:
        endDate = startDate.add(7, 'days');
        startDate = moment().endOf('day');
      case LAST_WEEK:
        startDate = startDate.subtract(7, 'days');
        break;
      case THIS_MONTH:
        endDate = startDate.add(1, 'month');
        startDate = moment().endOf('day');
        break;
      case LAST_MONTH:
        startDate = startDate.subtract(1, 'months');
        break;
      case THIS_YEAR:
        startDate = startDate.subtract(1, 'year');
        break;
      default:
        break;
    }

    this.onDateChange({ startDate, endDate });
  }

  render() {
    return (
      <DatePicker
        startDate={this.state.startDate}
        startDateId={1}
        endDate={this.state.endDate}
        focusedInput={this.state.focusedInput}
        endDateId={2}
        onDateChange={this.onDateChange}
        onFocChange={this.onFocChange}
        handleRangeClick={this.handleRangeClick}
        calendarInfo={true}
        activePeriod={this.state.activePeriod}
      />
    );
  }
}
<DatePickerExample />;
```
