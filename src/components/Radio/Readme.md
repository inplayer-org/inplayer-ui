RadioInput is a input component for radio. You can use it directly like this:

```jsx static
import { Radio } from '@inplayer-org/inplayer-ui';

function Page(props) {
  return <Radio id="radio1" label="label" onChange={e => console.log(e)} />;
}
```

### Demo

```jsx
<Radio type="radio" id="radio1" label="label" onChange={e => console.log(e)} />
```
