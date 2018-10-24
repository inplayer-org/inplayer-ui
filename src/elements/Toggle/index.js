// @flow
import React from 'react';
import Switcher from './Switch';
import Label from '../Label';

type Props = {
  checked: boolean,
  id: string,
  label: string,
  onChange: (checked: boolean) => any,
};

const Toggle = ({ id, checked, label, onChange }: Props) => {
  const onToggleChange = toggleChecked => {
    onChange(toggleChecked);
  };
  return (
    <div>
      <Switcher checked={checked} onChange={onToggleChange} id={id} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
};

/** @component */
export default Toggle;
