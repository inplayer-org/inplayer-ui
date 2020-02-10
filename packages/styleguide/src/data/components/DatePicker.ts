import { ComponentData } from "../types";

const usage = `
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
          displayPresets={['default']}
          isOutsideRange={() => false}
          onFocusChange={this.onFocusChange}
          focusedInput={this.state.focusedInput}
          customAllTimeDate={1514208111}
          activePeriodPreset="last month"
        />
      );
    }
  }
`;

const demoCode = `
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
          displayPresets={['default']}
          isOutsideRange={() => false}
          onFocusChange={this.onFocusChange}
          focusedInput={this.state.focusedInput}
          customAllTimeDate={1514208111}
          activePeriodPreset="last month"
        />
      );
    }
  }
`;

const DatePicker: ComponentData = {
  description: `
  DatePicker is a component for picking range for dates. It takes: 
  -startDate and endDate as a prop( momentPropTypes.momentObj or null) 
  - startDateId and endDateId 
  - onDateChange function for setting the state for the dates 
  - displayPresets prop is an array where the user defines which presets to be displayed to the date picker. Available presets are: this week, last week, last 2 weeks, this month, last month, last 6 months, this year, all time. Default option is available as well and if the user adds only default prop to the array, following presets will be displayed: this week, last week, this month, last month, this year, 
  - isOutsideRange a function which specifies the days that are not allowed to be choosed (ex. isOutsideRange={day => day.isBefore(moment())}). 
  - customAllTimeDate a timestamp that defines from which date the all time starts in the preset 
  - activePeriod prop is a string where the user defines which presets period to be selected to the date picker. Available presets periods are those present in displayPresets.
  `,
  path: 'src/elements/DatePicker/index.js',
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
  propsAndMethods: [
    { name: 'focusedInput', type: 'union', default: 'Required' },
    { name: 'onDateChange', type: 'Function', default: 'Required' },
    { name: 'onFocusChange', type: 'Function', default: 'Required' },
    { name: 'startDate', type: 'Moment', default: 'Required' },
    { name: 'activePeriodPreset', type: 'string' },
    { name: 'calendarInfo', type: 'unknown', default: 'false' },
    { name: 'className', type: 'string' },
    { name: 'customAllTimeDate', type: 'number', default: 'moment() .startOf("day") .subtract(3, "year")' },
    { name: 'displayPresets', type: 'Array', default: '[ ]' },
    { name: 'endDate', type: 'Moment', default: 'null' },
    { name: 'endDateId', type: 'string', default: 'endDate' },
    { name: 'isOutsideRange', type: 'Function', default: '() => false' },
    { name: 'minimumNights', type: 'number', default: '0' },
    { name: 'startDateId', type: 'string', default: 'startDate' },
    { name: 'style', type: 'Object', default: '{ }' },
  ],
}

export default DatePicker;