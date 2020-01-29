A simple Dropdown controlled component.
Receives an `options` prop which is an array of `{ value, displayName }` pairs and `defaultOption` prop which is an object of `{displayName, disabled}`. `value` is passed to the `option` tag as `value` prop while `displayName` is the value used in the dropdown UI.

Can accept a custom `color` parameter, otherwise it uses the theme `primary.main` color.

### Standard dropdown

```jsx
const options = [
  { value: 'Option 1', displayName: 'Option 1' },
  { value: 'Option 2', displayName: 'Option 2' },
];

<Dropdown options={options} value={options[0].value} onChange={console.log} />;
```

### Standard dropdown with disabled default option

```jsx
const options = [
  { value: 'Option 1', displayName: 'Option 1' },
  { value: 'Option 2', displayName: 'Option 2' },
];

const defaultOption = { displayName: 'default value',  disabled: true};

<Dropdown options={options} value={options[0].value} defaultOption={defaultOption} onChange={console.log} />;
```

### Standard dropdown with enabled default option

```jsx
const options = [
  { value: 'Option 1', displayName: 'Option 1' },
  { value: 'Option 2', displayName: 'Option 2' },
];

const defaultOption = { displayName: 'default value' };

<Dropdown options={options} value={options[0].value} defaultOption={defaultOption} onChange={console.log} />;
```

### Font size modifiers

```jsx
const options = [
  { value: 'Option 1', displayName: 'Option 1' },
  { value: 'Option 2', displayName: 'Option 2' },
];

<div>
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
```

### With custom color

```jsx
const options = [
  { value: 'Option 1', displayName: 'Option 1' },
  { value: 'Option 2', displayName: 'Option 2' },
];

<Dropdown
  options={options}
  value={options[0].value}
  onChange={console.log}
  color="#936"
/>;
```

### Disabled

```jsx
const options = [
  { value: 'Option 1', displayName: 'Option 1' },
  { value: 'Option 2', displayName: 'Option 2' },
];

<Dropdown
  options={options}
  value={options[0].value}
  onChange={console.log}
  disabled
/>;
```
