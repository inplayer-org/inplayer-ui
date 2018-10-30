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
        <Button size="xs">Button XS</Button> <br />
        <Button size="sm">Button SM</Button> <br />
        <Button size="md">Button MD</Button> <br />
        <Button size="lg">Button LG</Button> <br />

        <Button buttonModifiers={['hoverBlue']}>Hover Blue</Button> <br />
        <Button buttonModifiers={['hoverRed']}>Hover Red</Button> <br />
        <Button buttonModifiers={['hoverGreen']}>Hover Green</Button> <br />


        <Button buttonModifiers={['buttonInfo']}>Button Info</Button> <br />
        <Button buttonModifiers={['buttonPrimary']}>Button Primary</Button> <br />
        <Button buttonModifiers={['buttonWarning']}>Button Warning</Button> <br />
        <Button buttonModifiers={['buttonSuccess']}>Button Success</Button> <br />
        <Button buttonModifiers={['buttonDanger']}>Button Danger</Button> <br />

        <Button buttonModifiers={['buttonDanger']}
                iconModifiers={['statusColorDanger']}
                icon="exclamation-circle"
        >
          Button with Icon
        </Button>
    </div>
```
