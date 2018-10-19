// @flow
import React from 'react';
import Switcher from './Switch';
import Label from '../Label';

type Props = {
  value: boolean,
  id: string,
  label: string,
  onChange: (checked: boolean) => any,
};

const Toggle = ({ id, value, label, onChange }: Props) => {
  const onToggleChange = (e: SyntheticEvent<HTMLInputElement>): any => onChange(e.target.checked);
  return (
    <div>
      <Switcher checked={value} onChange={onToggleChange} id={id} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
};

/** @component */
export default Toggle;
