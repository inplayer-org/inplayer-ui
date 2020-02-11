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

const labelWithModifiers = `
<div>
  <Label modifiers={['fontSizeExtraSmall']}>Extra Small</Label>
  <br />
  <Label modifiers={['fontSizeSmall']}>Small</Label>
  <br />
  <Label modifiers={['fontSizeMedium']}>Medium</Label>
  <br />
  <Label modifiers={['fontSizeLarge']}>Large</Label>
</div>
`;

const Label: ComponentData = {
  path: `src/elements/Label/index.js`,
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    },
    {
      title: 'Label with font size Modifiers',
      code: labelWithModifiers,
    }
  ],
}

export default Label;