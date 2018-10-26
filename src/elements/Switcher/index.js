// @flow
import React from 'react';
import Toggle from 'react-toggle';

import SwitchWrapper from './SwitchWrapper';
import Label from '../Label';

type Props = {
  checked: boolean,
  disabled: boolean,
  id: string,
  label: string,
  onChange: (checked: boolean) => any,
};

const Switcher = ({ id, checked, label, disabled, onChange }: Props) => {
  const onToggleChange = (e: SyntheticInputEvent<*>) => {
    if (e.target) {
      onChange(e.target.checked);
    }
  };
  return (
    <SwitchWrapper>
      <Toggle
        id={id}
        disabled={disabled}
        defaultChecked={checked}
        onChange={onToggleChange}
        icons={false}
      />
      <Label htmlFor={id}>{label}</Label>
    </SwitchWrapper>
  );
};

/** @component */
export default Switcher;
