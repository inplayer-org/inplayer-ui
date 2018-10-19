Checkbox input is a input component for checkbox. You can use it directly like this:

```jsx static
import { Checkbox } from '@inplayer-org/inplayer-ui';

function Page(props) {
  return (
    <Checkbox
      type="checkbox"
      name="checkbox1"
      id="checkbox1"
      label="label"
      value="checkbox1"
      onChange={e => console.log(e)}
    />
  );
}
```

### Demo

```jsx
<Checkbox
  type="checkbox"
  name="checkbox1"
  id="checkbox1"
  label="label"
  value="checkbox1"
  onChange={e => console.log(e)}
/>
```
