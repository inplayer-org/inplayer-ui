import React, { SyntheticEvent } from 'react'
import { Label } from 'elements/Label'
import { RadioWrapper } from './RadioWrapper';

interface Props {
  label: string;
  id: string;
  name?: string;
  checked: boolean;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => any;
  onBlur?: (e: any) => any;
  /** A className can be passed down for further styling or extending with CSS-in-JS */
  className?: string;
  style?: Object;
  disabled?: boolean;
};

export const Radio = ({ label, id, checked, onChange, className, style, ...rest }: Props) => (
  <RadioWrapper>
    <input type="radio" id={id} checked={checked} onChange={onChange} {...rest} />
    <Label htmlFor={id}>{label}</Label>
  </RadioWrapper>
);