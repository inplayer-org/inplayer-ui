import { ComponentData } from "../types";

const usage = `
  import { Input, InPlayerIcon } from '@inplayer-org/inplayer-ui';

  function Page(props) {
    return (
      <Input
        type="text"
        placeholder="text"
        onChange={console.log}
      />
    );
  }
`

const demoCode = `
<div>
  <Input
    type="text"
    placeholder="text"
    onChange={console.log}
  />
  <Input
    type="search"
    placeholder="Search"
    onChange={console.log}
    style={{ marginTop: '1rem' }}
  />
    <Input type="text" placeholder="Input with icon"
    style={{ marginTop: '1rem' }} iconName="lock" />
    <Input type="text" placeholder="Input with custom icon"
    style={{ marginTop: '1rem' }} renderIcon={() => <div style={{ marginLeft: '5px', top: '30px', position: 'relative' }}><InPlayerIcon name="download" modifiers={['statusColorSuccess']} /></div>} />
</div>
`

const inputSizesCode = `
<>
  <Input size="xs" type="text" placeholder="Extra Small Input" />
  <Input size="sm" type="text" placeholder="Small Input" style={{ marginTop: '1rem' }}/>
  <Input size="md" type="text" placeholder="Medium Input" style={{ marginTop: '1rem' }}/>
  <Input size="lg" type="text" placeholder="Large Input" style={{ marginTop: '1rem' }}/>
</>
`

const Input: ComponentData = {
  description: `Text input is a input component for text. You can use it directly like this:`,
  path: `src/elements/Input/index.js`,
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    },
    {
      title: 'Input Sizes',
      code: inputSizesCode,
    }
  ],
  propsAndMethods: [
    { name: 'id', type: 'string', default: 'Required' },
    { name: 'onChange', type: 'function', default: 'Required' },
    { name: 'placeholder', type: 'string', default: 'Required' },
    { name: 'type', type: 'string', default: 'Required' },
    { name: 'value', type: 'union', default: 'Required' },
    { name: 'className', type: 'string', default: 'Required' },
    { name: 'iconName', type: 'string', default: 'Required' },
    { name: 'renderIcon', type: 'function', default: 'null' },
    { name: 'size', type: 'enum', default: 'md' , description: 'One of: xs, sm, md, lg'},
    { name: 'style', type: 'Object', default: '{}' },
  ]
}

export default Input;