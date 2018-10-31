DatePicker is a componet for picking range for dates. It takes a `startDate` and `endDate` as a prop( momentPropTypes.momentObj or null), `startDateId` and `endDateId`, `calendarInfo` prop which can be a boolean (if true, the presets are shown).

```jsx static
import { DatePicker } from '@inplayer-org/inplayer-ui';
import moment from 'moment';

class Page extends React.Component {
    state = {
    startDate: null,
    endDate: null,
    focusedInput: null
  };

  onDateChange = ({ startDate, endDate }) => {
    this.setState({
      startDate,
      endDate
    });
  };

  onFocChange = focusedInput => {
    this.setState({
     focusedInput
    });
  };

  return <DatePicker
    startDate={moment().subtract(1, 'month')}
    endDate={moment()}
    onDateChange={(startDate, endDate)=>{ console.log(startDate, endDate); }}
  	onFocChange={(focusedInput)=>{ console.log(focusedInput); }}
    focusedInput={moment()}
    calendarInfo={true}
  />
}
```

### Demo

```jsx
<DatePicker
  startDate={null}
  startDateId={1}
  endDate={null}
  endDateId={2}
  onDateChange={(startDate, endDate) => {
    console.log(startDate, endDate);
  }}
  onFocChange={focusedInput => {
    console.log(focusedInput);
  }}
  focusedInput={'endDate'}
  calendarInfo={true}
/>
```
