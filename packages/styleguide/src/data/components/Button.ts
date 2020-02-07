import { ComponentData } from "../types";

const usage = `
  import { Button } from '@inplayer-org/inplayer-ui';
    
  function Page(props) {
    return <Button>Buy now</Button>;
  }
`;

const demoCode = ` <Button>Buy now</Button>`;

const buttonSizes = `<div>
  <Button size="xs">Button XS</Button> <br />
  <Button size="sm">Button SM</Button> <br />
  <Button size="md">Button MD</Button> <br />
  <Button size="lg">Button LG</Button> <br />
  <Button fullWidth>Button Full Width</Button> <br />
</div>
`;

const buttonModifiers = `<div>
  <h5>Button hover:</h5>
  <Button>No Modifier</Button> <br />
  <Button buttonModifiers={['hoverInfo']}>Hover Info</Button> <br />
  <Button buttonModifiers={['hoverDanger']}>Hover Danger</Button> <br />
  <Button buttonModifiers={['hoverWarning']}>Hover Warning</Button> <br />
  <Button buttonModifiers={['hoverSuccess']}>Hover Success</Button> <br />
  <h5>Button types:</h5>
  <Button buttonModifiers={['buttonInfo']}>Button Info</Button> <br />
  <Button buttonModifiers={['buttonPrimary']}>Button Primary</Button> <br />
  <Button buttonModifiers={['buttonWarning']}>Button Warning</Button> <br />
  <Button buttonModifiers={['buttonSuccess']}>Button Success</Button> <br />
  <Button buttonModifiers={['buttonDanger']}>Button Danger</Button> <br />
  <Button disabled>Button Disabled</Button> <br />
  <Button buttonModifiers={['buttonLink']}>Button Link</Button>
</div>
`;

const buttonWithIcon = `<div>
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
  <br />
  <Button icon={<InPlayerIcon name="download" />}>
    Button with Custom Icon
  </Button>
</div>
`;

const Button: ComponentData = {
  description: `
    Button is a component with a few modifiers: button--blue, button--red, button--disabled. You can use it directly like this:
  `,
  path: 'src/components/Button/index.js',
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    },
    {
      title: 'Button Sizes',
      code: buttonSizes,
    },
    {
      title: 'Button with Modifiers',
      code: buttonModifiers,
    },
    {
      title: 'Button with Icon',
      code: buttonWithIcon
    },
  ],
  propsAndMethods: [
    { name: 'children', type: 'Node', default: 'Required' },
    { name: 'buttonModifiers', type: 'Array<string>' },
    { name: 'className', type: 'string' },
    { name: 'icon', type: 'union' },
    { name: 'iconModifiers', type: 'Array<string>' },
    { name: 'iconPosition', type: 'string' },
    { name: 'size', type: 'enum', default: 'md', description: 'One of: xs, sm, md, lg' },
    { name: 'style', type: 'Object', default: '{}' },
  ]
}

export default Button;