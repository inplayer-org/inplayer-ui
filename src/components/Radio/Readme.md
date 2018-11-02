RadioInput is a input component for radio. You can use it directly like this:

```jsx static
import React from 'react';
import { Radio } from '@inplayer-org/inplayer-ui';

class Page extends React.Component {
  state = {
    checked: false,
  };

  onRadioChange = checked => {
    this.setState({
      checked,
    });
  };

  render() {
    return <Radio id="radio1" label="label" onChange={this.onRadioChange} />;
  }
}
```

### Demo

```jsx
<Radio type="radio" id="radioUnchecked" label="Check me!" onChange={e => console.log(e)} />
<br />
<Radio type="radio" id="radioChecked" label="Checked by default!" checked onChange={e => console.log(e)} />
<br />
<Radio type="radio" id="radioDisabledUnchecked" disabled label="Disabled and unchecked!" onChange={e => console.log(e)} />
<br />
<Radio type="radio" id="radioDisabledChecked" disabled checked label="Disabled and checked!" onChange={e => console.log(e)} />
```
