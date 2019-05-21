Tooltip a is a component for displaying additional information on hover some element. The position of the tooltip attribute can be: up, down, right, left, up-right, up-left, down-left and down-right. You can use it directly like this:

```jsx static
import { Tooltip } from 'inplayer-ui';

function Page(props) {
  return (
    <Tooltip
      content="😎"
    >
      <Button>
        Hover me !
      </Button>
    </Tooltip>
  );
}
```

### Demo

```jsx
<Tooltip
  content="😎"
>
  <Button>
    Hover me!
  </Button>
</Tooltip>
<br />
<br />
<Tooltip
  content="Tooltip at the left"
  placement="left"
>
  <Button>
    Hover me too!
  </Button>
</Tooltip>
<br />
<br />
<Tooltip
  content="Tooltip at the right"
  placement="right"
>
  <Button>
    Hover me as well!
  </Button>
</Tooltip>
<br />
<br />
<Tooltip
  content="Tooltip at the bottom"
  placement="bottom"
>
  <Button>
    Hover me also!
  </Button>
</Tooltip>
<br />
<br />
<Tooltip
  content="Hello!"
  behavior="click"
  placement="right"
>
  <Button>
    Click me!
  </Button>
</Tooltip>
```

### Tooltip with Custom Color

```jsx
<Tooltip
  arrow={15}
  background="#000"
  border="#000"
  color="#fff"
  content="😎"
  fadeDuration={0}
  fadeEasing="linear"
  fixed={false}
  fontFamily="inherit"
  fontSize="inherit"
  offset={0}
  padding={2}
  placement="top"
  radius={0}
  zIndex={1}
>
  <Button>
    Hover me !
  </Button>
</Tooltip>
```
