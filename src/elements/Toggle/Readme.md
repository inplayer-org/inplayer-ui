Toggle is a input component for flipswitch. You can use it directly like this:

```jsx static
import { Label, Toggle } from '@inplayer-org/inplayer-ui';

class Page extends React.Component {
   state = {
    checked: false,
  };

  onToggleChange = checked => {
    this.setState({
      checked,
    });
  };

  return <Toggle checked={value} id="toggle1" label="swipe" onChange={this.onToggleChange} />
}
```

### Demo

```jsx
<Toggle checked={true} id="toggle1" label="swipe" onChange={console.log} />
```
