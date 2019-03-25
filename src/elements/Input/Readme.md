Text input is a input component for text. You can use it directly like this:

```jsx static
import { Input } from '@inplayer-org/inplayer-ui';

function Page(props) {
  return (
    <Input
      type="text"
      placeholder="text"
      onChange={console.log}
    />
  );
}
```

### Demo

```jsx
<Input
  type="text"
  placeholder="text"
  onChange={console.log}
/>
<Input
  type="search"
  placeholder="Search"
  onChange={console.log}
  style={{ marginTop: '1rem' }}
/>
```

### Input Sizes

```jsx
<>
  <Input size="xs" type="text" placeholder="Extra Small Input" />
  <Input size="sm" type="text" placeholder="Small Input" style={{ marginTop: '1rem' }}/>
  <Input size="md" type="text" placeholder="Medium Input" style={{ marginTop: '1rem' }}/>
  <Input size="lg" type="text" placeholder="Large Input" style={{ marginTop: '1rem' }}/>
</>
```