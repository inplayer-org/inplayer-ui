import { ComponentData } from "../types";

const usage = `
  import { Label } from '@inplayer-org/inplayer-ui';

  function Page(props) {
    return <Label>label</Label>;
  }
`

const demoCode = `
<div>
  <Label>Label</Label>
  <br />
  <Label disabled>Label Disabled</Label>
</div>
`

const Label: ComponentData = {
  path: `src/elements/Label/index.js`,
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
  propsAndMethods: [
    { name: 'size', type: 'unknown', default: 'md' },
  ]
}

export default Label;