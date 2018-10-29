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
<Tooltip placement="up" dataTip="hello world">
  Hover me!
</Tooltip>

<Tooltip placement="down" dataTip="hello world over here" >
  Hover me!
</Tooltip>

<Tooltip placement="right" dataTip="hello world on the right">
  Hover me!
</Tooltip>

<Tooltip placement="left" dataTip="hello world on the left">
  Hover me!
</Tooltip>
```
