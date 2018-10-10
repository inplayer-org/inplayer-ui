Grid, itself, is not a component, you can import several components from it. `Container`, `Row`, and `Column`, all live within Grid. Each of these components is Flexbox-based. You can either use them directly like this:

```jsx static
import { Grid } from "inplayer-ui";

function Page(props) {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Column>first column</Grid.Column>
        <Grid.Column>second column</Grid.Column>
        <Grid.Column>first column</Grid.Column>
      </Grid.Row>
    </Grid.Container>
  );
}
```

Or you can deconstruct them like this:

```jsx static
import { Grid } from "inplayer-ui";

const { Column, Container, Row } = Grid;

function Page(props) {
  return (
    <Container>
      <Row>
        <Column>first column</Column>
        <Column>second column</Column>
        <Column>first column</Column>
      </Row>
    </Container>
  );
}
```

### Container

Note that the Container has a default padding of 0.5rem, unless you pass the `fluid` prop, which removes all padding.

### Row

Row doesn't have any padding or special props. Its job is simply to render Columns properly.

### Column

Column has a default padding of 0.5rem, unless you pass the `fluid` prop, which removes all padding.

### Demo

These components are largely invisible, so we've added some styling to help display them.

```jsx
const containerStyle = {
  border: "solid 2px #4F40F0"
};

const rowStyle = {
  border: "solid 2px #008900",
  margin: "2px"
};

const columnStyle = {
  background: "#0975E0",
  color: "#FFF",
  margin: "2px"
};

<Grid.Container style={containerStyle} modifiers={['fluid']}>
  <Grid.Row style={rowStyle}>
    <Grid.Column flex="1" style={columnStyle}>
      Column 1
    </Grid.Column>
    <Grid.Column flex="2" style={columnStyle}>
      Column 2
    </Grid.Column>
    <Grid.Column flex="1" style={columnStyle}>
      Column 3
    </Grid.Column>
  </Grid.Row>
  <Grid.Row style={rowStyle}>
    <Grid.Column flex="2" style={columnStyle}>
      Column 1
    </Grid.Column>
    <Grid.Column flex="1" style={columnStyle}>
      Column 2
    </Grid.Column>
    <Grid.Column style={columnStyle}>Column 3</Grid.Column>
  </Grid.Row>
  <Grid.Row style={rowStyle}>
    <Grid.Column style={columnStyle}>Column 1</Grid.Column>
    <Grid.Column style={columnStyle}>Column 2</Grid.Column>
    <Grid.Column style={columnStyle}>Column 3</Grid.Column>
  </Grid.Row>
</Grid.Container>;
```
