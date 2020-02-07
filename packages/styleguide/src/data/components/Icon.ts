import { ComponentData } from "../types";

const demoCode = `
<Grid.Container>
  <Grid.Cell>
    <Icon name="info-circle" modifiers={['statusColorInfo']} />
  </Grid.Cell>
  <Grid.Cell>
    <Icon name="check-circle" modifiers={['statusColorSuccess']} />
  </Grid.Cell>
  <Grid.Cell>
    <Icon name="exclamation-circle" modifiers={['statusColorWarning']} />
  </Grid.Cell>
  <Grid.Cell>
    <Icon name="times-circle" modifiers={['statusColorDanger']} />
  </Grid.Cell>
  <Grid.Cell>
    <Icon name="times" color="black" />
  </Grid.Cell>
</Grid.Container>
`;

const Icon: ComponentData = {
  path: `src/elements/Icon/index.js`,
  usage: '',
  examples: [
    {
      title: '',
      code: demoCode,
    }
  ],
}

export default Icon;