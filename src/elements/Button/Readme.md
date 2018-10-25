Button is a component with a few modifiers: button--blue, button--red, button--disabled. You can use it directly like this:

```jsx static
import { Button } from '@inplayer-org/inplayer-ui';

function Page(props) {
  return <Button>Buy now</Button>;
}
```

### Demo

```jsx
<Button>Buy now</Button>
```

### Button Modifiers
```jsx
    <div>
        <Button modifiers={['hoverBlue']}>Hover Blue</Button> <br />
        <Button modifiers={['hoverRed']}>Hover Red</Button> <br />
        <Button modifiers={['hoverGreen']}>Hover Green</Button>

    </div>
```
