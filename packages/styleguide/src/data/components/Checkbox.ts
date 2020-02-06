import { ComponentData } from '../data';

const Checkbox: ComponentData = {
    description: `
      Checkbox input is a input component for checkbox. You can use it directly like this:
    `,
    path: `src/components/Checkbox/index.js`,
    usage: `
    import React from 'react';
    import { Checkbox } from '@inplayer-org/inplayer-ui';
  
    class Page extends React.Component {
      state = {
        checked: false,
      };
  
      onCheckboxChange = checked => {
        this.setState({
          checked,
        });
      };
  
      render() {
        return (
          <div>
          <Checkbox
            name="checkbox1"
            id="checkbox1"
            label="Check me!"
            onChange={this.onCheckboxChange}
          />
          </div>
        );
      }
    }
    `,
    examples: [
        {
            title: "Demo",
            code: `
        <div>
            <Checkbox
            name="checkboxUnchecked"
            id="checkboxUnchecked"
            label="Check me!"
            onChange={e => console.log(e)}
            />
            <Checkbox
            checked
            name="checkboxChecked"
            id="checkboxChecked"
            label="Checked by default!"
            onChange={e => console.log(e)}
            />
            <Checkbox
            disabled
            name="checkboxDisabledUnchecked"
            id="checkboxDisabledUnchecked"
            label="Disabled and unchecked!"
            onChange={e => console.log(e)}
            />
            <Checkbox
            checked
            disabled
            name="checkboxDisabledChecked"
            id="checkboxDisabledChecked"
            label="Disabled and checked!"
            onChange={e => console.log(e)}
            />
        </div>
       `
        }
    ],
    propsAndMethods: [
      {name: 'checked', type: 'boolean', default: 'required'},
      {name: 'id', type: 'string', default: 'required'},
      {name: 'label', type: 'string', default: 'required'},
      {name: 'name', type: 'string', default: 'required'},
      {name: 'onChange', type: 'function', default: 'required'},
      {name: 'className', type: 'string', description: 'A className can be passed down for further styling or extending with CSS-in-JS'},
      {name: 'containerRef', type: 'React.RefObject<HTMLDivElement>	', default: 'null'},
      {name: 'disabled', type: 'boolean', default: 'false'},
      {name: 'style', type: 'Object', default: '{}'},
    ],
}

export default Checkbox;