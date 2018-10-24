// @flow
import React from 'react';
import Switcher from './Switch';
import Label from '../Label';

type Props = {
  checked: boolean,
  disabled: boolean,
  id: string,
  label: string,
  onChange: (checked: boolean) => any,
};

const Toggle = ({ id, checked, label, disabled, onChange }: Props) => {
  const onToggleChange = toggleChecked => {
    onChange(toggleChecked);
  };
  return (
    <Label>
      <Switcher disabled={disabled} checked={checked} id={id} onChange={onToggleChange} />
      {label}
    </Label>
  );
};

/** @component */
export default Toggle;
