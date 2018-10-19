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
<Radio type="radio" id="radio1" label="label" onChange={e => console.log(e)} />
```
