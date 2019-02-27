Text input is a input component for text. You can use it directly like this:

```jsx static
import { Input } from '@inplayer-org/inplayer-ui';

function Page(props) {
  return (
    <Input
      type="text"
      placeholder="text"
      onChange={() => console.log('onChange')}
    />
  );
}
```

### Demo

```jsx
<Input
  type="text"
  placeholder="text"
  onChange={() => console.log('onChange')} />
<Input
  type="search"
  placeholder="Search"
  onChange={() => console.log('onChange')}
/>
```
