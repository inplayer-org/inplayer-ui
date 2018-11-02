Typography is an element which allows you to control the style of your text.
It has a `variant` prop which allows you to choose between the h1-h6 headings.
It inherits the `palette.primary.dark` text color, however this can be overridden by
using styled-components.

```jsx static
import { Typography } from '@inplayer-org/inplayer-ui';

<div>
  <Typography variant="h1">Heading H1</Typography>
  <Typography variant="h2">Heading H2</Typography>
  <Typography variant="h3">Heading H3</Typography>
  <Typography variant="h4">Heading H4</Typography>
  <Typography variant="h5">Heading H5</Typography>
  <Typography variant="h6">Heading H6</Typography>
  <Typography variant="p">Paragraph</Typography>
  <Typography variant="p" description>
    Paragraph as description
  </Typography>
</div>;
```

### Demo

```jsx
<Typography variant="h1">Heading H1</Typography>
<Typography variant="h2">Heading H2</Typography>
<Typography variant="h3">Heading H3</Typography>
<Typography variant="h4">Heading H4</Typography>
<Typography variant="h5">Heading H5</Typography>
<Typography variant="h6">Heading H6</Typography>
<Typography variant="p">This is a paragraph</Typography>
<Typography variant="p" description>This is a paragraph that is used as a description</Typography>
```

### Typegraphy with modifiers

```jsx
<Typography variant="h1" modifiers={['textPrimary']}>Heading H1 with primary modifier</Typography>
<Typography variant="h2" modifiers={['textDanger']}>Heading H1 with danger modifier</Typography>
<Typography variant="h3" modifiers={['textSuccess']}>Heading H1 with success modifier</Typography>
<Typography variant="h4" modifiers={['textWarning']}>Heading H1 with warning modifier</Typography>
```

### Typegraphy with custom color provideed

```jsx
<Typography variant="h1" color="red">Heading H1 with custom red color</Typography>
<Typography variant="h2" color="mint">Heading H1 with custom mint color</Typography>
<Typography variant="h3" color="purple">Heading H1 with custom purple color</Typography>
<Typography variant="h4" color="black">Heading H1 with custom black color</Typography>
```
