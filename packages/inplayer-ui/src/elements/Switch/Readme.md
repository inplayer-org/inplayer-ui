Toggle is a input component for flipswitch. You can use it directly like this:

```jsx static
import { Label, Switch } from '@inplayer-org/inplayer-ui';

class Page extends React.Component {
   state = {
    checked: false,
  };

  onToggleChange = checked => {
    this.setState({
      checked,
    });
  };

  return <Switch checked={value} id="toggle1" label="swipe" onChange={this.onToggleChange} />
}
```

### Demo

```jsx
<Switch
  disabled={false}
  checked={false}
  id="unchecked"
  label="Swipe me!"
  onChange={console.log}
/>
<br />
<Switch
  disabled={false}
  checked={true}
  id="checkedByDefault"
  label="Checked by default!"
  onChange={console.log}
/>
<br />
<Switch
  disabled={true}
  checked={false}
  id="disabledUnchecked"
  label="Disabled!"
  onChange={console.log}
/>
<br />
<Switch
  disabled={true}
  checked={true}
  id="disabledChecked"
  label="Disabled and checked!"
  onChange={console.log}
/>
```
