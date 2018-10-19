Checkbox input is a input component for checkbox. You can use it directly like this:

```jsx static
import React from 'react';
import { Checkbox } from '@inplayer-org/inplayer-ui';

class Page extends React.Component {
  state = {
    checked: false,
  };

  onCheckboxChange = checked => {
    this.setState({
      checked,
    });
  };

  render() {
    return (
      <Checkbox
        name="checkbox1"
        id="checkbox1"
        label="Check me!"
        onChange={this.onCheckboxChange}
      />
    );
  }
}
```

### Demo

```jsx
<Checkbox
  name="checkbox1"
  id="checkbox1"
  label="Check me!"
  onChange={e => console.log(e)}
/>
```
