import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import Label from '../Label';
import { RadioWrapper } from './RadioWrapper';

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  name?: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (e: any) => any;
  disabled?: boolean;
};

const Radio = ({
  label,
  id,
  checked,
  onChange,
  onBlur = () => {},
  disabled = false,
  name = '',
  ...rest
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
      {...rest}
    />
    <Label htmlFor={id}>{label}</Label>
  </RadioWrapper>
);

export default Radio;
