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
}`;

const description = `
A simple Dropdown controlled component. Receives an <b>options</b> prop which is an array of <b>{ value, displayName }</b> pairs and <b>defaultOption</b> prop which is an object of <b>{displayName, disabled}</b>. <b>value</b> is passed to the <b>option</b> tag as <b>value</b> prop while <b>displayName</b> is the value used in the dropdown UI.

Can accept a custom <b>color</b> parameter, otherwise it uses the theme <b>primary.main</b> color.
`;

const Dropdown: ComponentData = {
  description,
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