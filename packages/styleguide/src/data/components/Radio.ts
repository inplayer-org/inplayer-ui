import { ComponentData } from "../types";

const usage = `
  import React from 'react';
  import { Radio } from '@inplayer-org/inplayer-ui';

  class Page extends React.Component {
    state = {
      checked: false,
    };

    onRadioChange = checked => {
      this.setState({
        checked,
      });
    };

    render() {
      return <Radio id="radio1" label="label" onChange={this.onRadioChange} />;
    }
  }
`;

const demoCode = `<div>
  <Radio id="radioUnchecked" label="Check me!" onChange={e => console.log(e)} />
  <br />
  <Radio id="radioChecked" label="Checked by default!" checked onChange={e => console.log(e)} />
  <br />
  <Radio id="radioDisabledUnchecked" disabled label="Disabled and unchecked!" onChange={e => console.log(e)} />
  <br />
  <Radio id="radioDisabledChecked" disabled checked label="Disabled and checked!" onChange={e => console.log(e)} />
</div>`;

const Radio: ComponentData = {
  description: `
    RadioInput is a input component for radio. You can use it directly like this:
    `,
  path: 'src/components/Radio/index.js',
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
    { name: 'name', type: 'string', default: 'Required' },
    { name: 'onChange', type: 'function', default: 'Required' },
    { name: 'className', type: 'string', description: 'A className can be passed down for further styling or extending with CSS-in-JS' },
    { name: 'disabled', type: 'boolean', default: 'false' },
    { name: 'onBlur', type: 'onBlur', default: 'Function' },
    { name: 'style', type: 'Object', default: '{ }' },
  ],
}

export default Radio;