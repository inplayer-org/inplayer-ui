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

### Button Sizes

```jsx
<div>
  <Button size="xs">Button XS</Button> <br />
  <Button size="sm">Button SM</Button> <br />
  <Button size="md">Button MD</Button> <br />
  <Button size="lg">Button LG</Button> <br />
  <Button fullWidth>Button Full Width</Button> <br />
</div>
```

### Button with Modifiers

```jsx
<div>
  <h3>Button hover:</h3>
  <Button>No Modifier</Button> <br />
  <Button buttonModifiers={['hoverInfo']}>Hover Info</Button> <br />
  <Button buttonModifiers={['hoverDanger']}>Hover Danger</Button> <br />
  <Button buttonModifiers={['hoverWarning']}>Hover Warning</Button> <br />
  <Button buttonModifiers={['hoverSuccess']}>Hover Success</Button> <br />
  <h3>Button types:</h3>
  <Button buttonModifiers={['buttonInfo']}>Button Info</Button> <br />
  <Button buttonModifiers={['buttonPrimary']}>Button Primary</Button> <br />
  <Button buttonModifiers={['buttonWarning']}>Button Warning</Button> <br />
  <Button buttonModifiers={['buttonSuccess']}>Button Success</Button> <br />
  <Button buttonModifiers={['buttonDanger']}>Button Danger</Button> <br />
  <Button disabled>Button Disabled</Button> <br />
  <Button buttonModifiers={['buttonLink']}>Button Link</Button>
</div>
```

### Button with Icon

```jsx
<div>
  <Button fullHeight icon="trash" buttonModifiers={['buttonDanger']} />
  <br/>
  <Button
    buttonModifiers={['buttonDanger']}
    icon="exclamation-circle"
    iconPosition="right"
  >
    Button with Icon on Right
  </Button>
  <br />
  <Button
    buttonModifiers={['buttonDanger']}
    iconModifiers={['statusColorWarning']}
    icon="exclamation-circle"
  >
    Button with Icon Color Modifier
  </Button>
</div>
```
