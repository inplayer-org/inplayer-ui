import { ComponentData } from "../types";

const Button: ComponentData = {
    description: ``,
    path: `src/components/Button/index.js`,
    usage: `
    import { Button } from '@inplayer-org/inplayer-ui';
  
    function Page(props) {
      return <Button>Buy now</Button>;
    }
   `,
    examples: [
        {
            title: "Demo",
            code: `
        <div>
          <Button size="xs">Button XS</Button> <br />
          <Button size="sm">Button SM</Button> <br />
          <Button size="md">Button MD</Button> <br />
          <Button size="lg">Button LG</Button> <br />
          <Button fullWidth>Button Full Width</Button> <br />
        </div>
        `
        }
    ],
    propsAndMethods: [
      { name: 'children', type:'Node', default: 'Required' },
      { name: 'buttonModifiers', type:'Array<string>' },
      { name: 'className', type:'string' },
      { name: 'icon', type:'union' },
      { name: 'iconModifiers', type:'Array<string>' },
      { name: 'iconPosition', type:'string' },
      { name: 'size', type:'enum', default: 'md', description: 'One of: xs, sm, md, lg' },
      { name: 'style', type:'Object', default: '{}' },
    ]
  }

export default Button;