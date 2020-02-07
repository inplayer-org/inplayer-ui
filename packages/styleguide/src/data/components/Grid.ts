import { ComponentData } from "../types";

const usage = `
  import { Grid } from '@inplayer-org/inplayer-ui';

  const { Container, Cell } = Grid;

  function Page(props) {
    return (
      <>
        <Grid.Container>
          <Grid.Cell>first column</Grid.Cell>
          <Grid.Cell>second column</Grid.Cell>
          <Grid.Cell>first column</Grid.Cell>
        </Grid.Container>
        <Container>
          <Cell>first column</Cell>
          <Cell>second column</Cell>
          <Cell>first column</Cell>
        </Container>
      </>
    );
  }
`;

const demoCode = `
  <Button onClick={() => window.open("https://styled-css-grid.js.org/")}>Demo and Usage</Button>
`;

const Grid: ComponentData = {
  description: `
    Grid, itself, is not a component, you can import several components from it. Container and Cell, all live within Grid. Each of these components is Flexbox-based. You can either use them directly or you can deconstruct them like this:
  `,
  path: 'src/blocks/Grid/index.js',
  usage,
  examples: [
    {
      code: demoCode,
      displayCode: false,
    }
  ],
  propsAndMethods: [],
}

export default Grid;