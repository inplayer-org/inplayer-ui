Tooltip a is a component for displaying additional information on hover some element. The position of the tooltip attribute can be: up, down, right, left, up-right, up-left, down-left and down-right. You can use it directly like this:

```jsx static
import { Tooltip } from 'inplayer-ui';

function Page(props) {
  return (
    <Tooltip placement="up" dataTip="hello world">
      Hover me!
    </Tooltip>
  );
}
```

### Demo

```jsx
<Tooltip placement="up" dataTip="Lorem Ipsum">
  Tooltip up!
</Tooltip>
<br />
<Tooltip placement="down" dataTip="Lorem Ipsum" >
  Tooltip down!
</Tooltip>
<br />
<Tooltip placement="left" dataTip="Lorem Ipsum">
  Tooltip left!
</Tooltip>
<br />
<Tooltip placement="right" dataTip="Lorem Ipsum">
  Tooltip right!
</Tooltip>
```

### Tooltip with Custom Color

```jsx
<Tooltip color="#0da" placement="down"
dataTip={`custom color tooltip.\nnew line here`}>
  Tooltip with custom color!
</Tooltip>
```
