import { ComponentData } from "../types";

const usage = `
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
`;

const demoCode = `
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
`;

const DayPicker: ComponentData = {
  description: `
  DayPicker is a component for picking single day. It takes: 
  -date as a prop( momentPropTypes.momentObj, string or null) 
  -focused as a prop( PropTypes.boolean) 
  - isOutsideRange a function which specifies the days that are not allowed to be choosed (ex. isOutsideRange={day => day.isBefore(moment())}). 
  - onFocusChange a function which controls whether or not the input is focused 
  - onDateChange function for setting the state for the dates 
  - numberOfMonths as a prop (PropTypes.number) - controls the number of the displayed months
  `,
  path: 'src/elements/DayPicker/index.js',
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
  propsAndMethods: [
    { name: 'date', type: 'union', default: 'Required' },
    { name: 'focused', type: 'boolean', default: 'Required' },
    { name: 'onDateChange', type: 'function', default: 'Required' },
    { name: 'onFocusChange', type: 'function', default: 'Required' },
    { name: 'className', type: 'string' },
    { name: 'isOutsideRange', type: 'function', default: 'Function' },
    { name: 'numberOfMonths', type: 'number', default: '1' },
    { name: 'style', type: 'Object', default: '{ }' },
  ],
}

export default DayPicker;