Text input is a input component for text. You can use it directly like this:

```jsx static
import { TextField } from '@inplayer-org/inplayer-ui';

function Page(props) {
  return (
    <TextField
      type="text"
      placeholder="text"
      onChange={() => console.log('onChange')}
    />
  );
}
```

### Demo

```jsx
<TextField
  type="text"
  placeholder="text"
  onChange={() => console.log('onChange')} />
<TextField
  search
  type="search"
  placeholder="Search"
  onChange={() => console.log('onChange')}
/>
```
