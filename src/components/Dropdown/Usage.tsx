import React, { useState } from 'react';
import Dropdown from '.';

const Usage = () => {
  const options = [
    { value: 'Option 1', displayName: 'Option 1' },
    { value: 'Option 2', displayName: 'Option 2' },
  ];

  const [value, setValue] = useState(options[0].value);
  const defaultOption = { displayName: 'default value', disabled: true };

  return (
    <>
      <Dropdown options={options} value={options[0].value} disabled />
      <br />
      <Dropdown
        options={options}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        color="#936"
      />
      <br />
      <Dropdown
        defaultOption={defaultOption}
        options={options}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
      <br />
      <br />
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
      </div>
    </>
  );
};

export default Usage;
