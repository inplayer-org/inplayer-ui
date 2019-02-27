Grid, itself, is not a component, you can import several components from it. `Container` and `Cell`, all live within Grid. Each of these components is Flexbox-based. You can either use them directly like this:

```jsx static
import { Grid } from '@inplayer-org/inplayer-ui';

function Page(props) {
  return (
    <Grid.Container>
      <Grid.Cell>first column</Grid.Cell>
      <Grid.Cell>second column</Grid.Cell>
      <Grid.Cell>first column</Grid.Cell>
    </Grid.Container>
  );
}
```

Or you can deconstruct them like this:

```jsx static
import { Grid } from '@inplayer-org/inplayer-ui';;

const { Container, Cell } = Grid;

function Page(props) {
  return (
    <Container>
      <Cell>first column</Cell>
      <Cell>second column</Cell>
      <Cell>first column</Cell>
    </Container>
  );
}
```

### [Demo and Usage](https://styled-css-grid.js.org/)



