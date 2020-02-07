import { ComponentData } from "../types";

const usage = `
  import { Label, Switch } from '@inplayer-org/inplayer-ui';

  class Page extends React.Component {
    state = {
      checked: false,
    };

    onToggleChange = checked => {
      this.setState({
        checked,
      });
    };

    return <Switch checked={value} id="toggle1" label="swipe" onChange={this.onToggleChange} />
  }
`;

const demoCode = `
<div>
  <Switch
  disabled={false}
  checked={false}
  id="unchecked"
  label="Swipe me!"
  onChange={console.log}
  />
  <br />
  <Switch
  disabled={false}
  checked={true}
  id="checkedByDefault"
  label="Checked by default!"
  onChange={console.log}
  />
  <br />
  <Switch
  disabled={true}
  checked={false}
  id="disabledUnchecked"
  label="Disabled!"
  onChange={console.log}
  />
  <br />
  <Switch
  disabled={true}
  checked={true}
  id="disabledChecked"
  label="Disabled and checked!"
  onChange={console.log}
/>
</div>
`;

const Switch: ComponentData = {
  description: `Toggle is a input component for flipswitch. You can use it directly like this:`,
  path: `src/elements/Switch/index.js`,
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
  propsAndMethods: [
    { name: 'checked', type: 'boolean', default: 'Required' },
    { name: 'id', type: 'string', default: 'Required' },
    { name: 'label', type: 'string', default: 'Required' },
    { name: 'onChange', type: 'function', default: 'Required' },
    {name: 'className', type: 'string', description: 'A className can be passed down for further styling or extending with CSS-in-JS'},
    { name: 'disabled', type: 'boolean', default: 'false' },
    { name: 'style', type:'Object', default: '{}' },
  ]
}

export default Switch;