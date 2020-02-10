import { ComponentData } from "../types";

const usage = `
  import { Tooltip } from 'inplayer-ui';

  function Page(props) {
    return (
      <Tooltip
        content="😎"
      >
        <Button>
          Hover me !
        </Button>
      </Tooltip>
    );
  }
`;

const demoCode = `<div>
  <Tooltip
    content="😎"
  >
    <Button>
      Hover me!
    </Button>
  </Tooltip>
  <br />
  <br />
  <Tooltip
    content="Tooltip at the left"
    placement="left"
  >
    <Button>
      Hover me too!
    </Button>
  </Tooltip>
  <br />
  <br />
  <Tooltip
    content="Tooltip at the right"
    placement="right"
  >
    <Button>
      Hover me as well!
    </Button>
  </Tooltip>
  <br />
  <br />
  <Tooltip
    content={\`Tooltip at the bottom\nTooltip at the bottom\`}
    placement="bottom"
  >
    <Button>
      Hover me also!
    </Button>
  </Tooltip>
  <br />
  <br />
  <Tooltip
    content="Hello!"
    behavior="click"
    placement="right"
  >
    <Button>
      Click me!
    </Button>
  </Tooltip>
</div>`;

const tooltipCustomColor = `<Tooltip
  arrow={15}
  background="#000"
  border="#000"
  color="#fff"
  content="😎"
  fadeDuration={0}
  fadeEasing="linear"
  fixed={false}
  fontFamily="inherit"
  fontSize="inherit"
  offset={0}
  padding={2}
  placement="top"
  radius={0}
  zIndex={1}
  >
  <Button>
    Hover me !
  </Button>
</Tooltip>
`;

const Tooltip: ComponentData = {
  description: `
    Tooltip a is a component for displaying additional information on hover some element. The position of the tooltip attribute can be: up, down, right, left, up-right, up-left, down-left and down-right. You can use it directly like this:
  `,
  path: 'src/components/Tooltip/index.js',
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    },
    {
      title: 'Tooltip with Custom Color',
      code: tooltipCustomColor,
    }
  ],
  propsAndMethods: [
    { name: 'content', type: 'Node', default: 'Required' },
    { name: 'arrowWidth', type: 'number	', default: '8' },
    { name: 'background', type: 'string' },
    { name: 'behavior', type: 'enum', default: 'hover', description: 'One of: hover, click, ref' },
    { name: 'border', type: 'string' },
    { name: 'children', type: 'Node', default: 'null' },
    { name: 'className', type: 'string', default: 'null' },
    { name: 'color', type: 'string' },
    { name: 'durationOnClick', type: 'number', default: '1000'},
    { name: 'fadeDuration', type: 'number', default: '150'},
    { name: 'fadeEasing', type: 'FadeEasing', default: 'linear'},
    { name: 'fixed', type: 'boolean', default: 'false'},
    { name: 'fontFamily', type: 'string', default: 'inherit'},
    { name: 'fontSize', type: 'string', default: 'null'},
    { name: 'offset', type: 'number', default: '0'},
    { name: 'padding', type: 'number', default: '0.7'},
    { name: 'placement', type: 'enum', default: 'top', description: 'One of: left, right, top, bottom' },
    { name: 'radius', type: 'number', default: '0'},
    { name: 'style', type: 'object', default: '{ }'},
    { name: 'zIndex', type: 'number', default: '1'},
  ],
}

export default Tooltip;