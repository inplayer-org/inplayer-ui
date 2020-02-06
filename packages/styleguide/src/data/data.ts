const Button = {
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
  propsAndMethods: [{}]
}

const Checkbox = {
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
  ]
}

const Data = {
    Checkbox,
    Button
}

export default Data;