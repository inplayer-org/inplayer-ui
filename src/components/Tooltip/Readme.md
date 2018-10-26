Tooltip a is a component for displaying additional information on hover some element. The position of the tooltip atribute can be: up, bottom, right, left, up-right, up-left, down-left and down-right. You can use it directly like this:

```jsx static
import { Tooltip } from 'inplayer-ui';
const { TooltipHolder, Tipneed, TooltipInfo } = Tooltip;

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
```
