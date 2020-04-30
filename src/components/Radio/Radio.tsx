import React, { ChangeEvent } from 'react';
import Label from 'elements/Label';
import { RadioWrapper } from './RadioWrapper';

interface RadioProps {
  label: string;
  id: string;
  name?: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (e: any) => any;
  disabled?: boolean;
}

const Radio = ({
  label,
  id,
  checked,
  onChange,
  onBlur = () => {},
  disabled = false,
  name = '',
}: RadioProps) => (
  <RadioWrapper>
    <input
      type="radio"
      id={id}
      checked={checked}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      name={name}
    />
    <Label htmlFor={id}>{label}</Label>
  </RadioWrapper>
);

export default Radio;
