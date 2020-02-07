import { ComponentData } from "../types";

const standardOption = `Page = () => {
  const options = [
    { value: 'Option 1', displayName: 'Option 1' },
    { value: 'Option 2', displayName: 'Option 2' },
  ];
  
  return <Dropdown options={options} value={options[0].value} onChange={console.log} />;
}
`

const standardDopdownDisabledDefaultOption = `Page = () => {
  const options = [
    { value: 'Option 1', displayName: 'Option 1' },
    { value: 'Option 2', displayName: 'Option 2' },
  ];

  const defaultOption = { displayName: 'default value',  disabled: true};
  
  return <Dropdown options={options} value={options[0].value} defaultOption={defaultOption} onChange={console.log} />;
}
`
const standardDopdownEnabledDefaultOption = `Page = () => {
  const options = [
    { value: 'Option 1', displayName: 'Option 1' },
    { value: 'Option 2', displayName: 'Option 2' },
  ];

  const defaultOption = { displayName: 'default value' };
  
  return <Dropdown options={options} value={options[0].value} defaultOption={defaultOption} onChange={console.log} />;
}
`

const fontSizeModifiers = `Page = () => {
  const options = [
    { value: 'Option 1', displayName: 'Option 1' },
    { value: 'Option 2', displayName: 'Option 2' },
  ];
  
  return <div>
    <Dropdown
      modifiers={['fontSizeExtraSmall']}
      options={options}
      value={options[0].value}
      onChange={console.log}
    />
    <br />
    <br />
    <Dropdown
      modifiers={['fontSizeSmall']}
      options={options}
      value={options[0].value}
      onChange={console.log}
    />
    <br />
    <br />
    <Dropdown
      modifiers={['fontSizeMedium']}
      options={options}
      value={options[0].value}
      onChange={console.log}
    />
    <br />
    <br />
    <Dropdown
      modifiers={['fontSizeLarge']}
      options={options}
      value={options[0].value}
      onChange={console.log}
    />
  </div>;
}`

const withCustomColor = `Page = () => {
  const options = [
    { value: 'Option 1', displayName: 'Option 1' },
    { value: 'Option 2', displayName: 'Option 2' },
  ];
  
  return <Dropdown
    options={options}
    value={options[0].value}
    onChange={console.log}
    color="#936"
  />;
}`

const disabled = `Page = () => {
  const options = [
    { value: 'Option 1', displayName: 'Option 1' },
    { value: 'Option 2', displayName: 'Option 2' },
  ];
  
  return <Dropdown
    options={options}
    value={options[0].value}
    onChange={console.log}
    disabled
  />;
}`

const Dropdown: ComponentData = {
  description: `A simple Dropdown controlled component. Receives an options prop which is an array of { value, displayName } pairs and defaultOption prop which is an object of {displayName, disabled}. value is passed to the option tag as value prop while displayName is the value used in the dropdown UI.

  Can accept a custom color parameter, otherwise it uses the theme primary.main color.`,
  path: `src/elements/Dropdown/index.js`,
  usage: ``,
  examples: [
    {
      title: 'Standard Option',
      code: standardOption,
    },
    {
      title: 'Standard dropdown with disabled default option',
      code: standardDopdownDisabledDefaultOption,
    },
    {
      title: 'Standard dropdown with enabled default option',
      code: standardDopdownEnabledDefaultOption,
    }, 
    {
      title: 'Font size modifiers',
      code: fontSizeModifiers,
    },
    {
      title: 'With custom colors',
      code: withCustomColor,
    },
    {
      title: 'Disabled',
      code: disabled,
    }
  ],
  propsAndMethods: [
    { name: 'option', type: 'Array<Option>', default: 'Required', description: 'Option is a { value: string, displayName: string } object' },
    { name: 'value', type: 'string', default: 'Required' },
    { name: 'className', type: 'string' },
    { name: 'color', type: 'string' },
    { name: 'defaultOption', type: 'string' },
    { name: 'disabled', type: 'boolean' },
    { name: 'onChange', type: 'function' },
    { name: 'style', type: 'Object', default: '{}' },
  ]
}

export default Dropdown;