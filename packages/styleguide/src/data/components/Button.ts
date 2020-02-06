import { ComponentData } from "../types";

const usage = `
  import { Button } from '@inplayer-org/inplayer-ui';
    
  function Page(props) {
    return <Button>Buy now</Button>;
  }
`;

const demoCode = `<div>
  <Button size="xs">Button XS</Button> <br />
  <Button size="sm">Button SM</Button> <br />
  <Button size="md">Button MD</Button> <br />
  <Button size="lg">Button LG</Button> <br />
  <Button fullWidth>Button Full Width</Button> <br />
</div>
`;

const Button: ComponentData = {
  description: ``,
  path: `src/components/Button/index.js`,
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
  propsAndMethods: [],
}

export default Button;