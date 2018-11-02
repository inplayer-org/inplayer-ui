Label is a element used with input elements. You can use it directly like this:

```jsx static
import { Label } from '@inplayer-org/inplayer-ui';

function Page(props) {
  return <Label>label</Label>;
}
```

### Demo

```jsx
<Label>Label</Label>
<br />
<Label disabled>Label Disabled</Label>
```

### Label with font size Modifiers

```jsx
<Label modifiers={['fontSizeExtraSmall']}>Extra Small</Label>
<br />
<Label modifiers={['fontSizeSmall']}>Small</Label>
<br />
<Label modifiers={['fontSizeMedium']}>Medium</Label>
<br />
<Label modifiers={['fontSizeLarge']}>Large</Label>
```
