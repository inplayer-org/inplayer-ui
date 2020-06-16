import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { StyledLabel, Root, Input, Fill } from './RadioWrapper';

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
  <StyledLabel disabled={disabled}>
    <Root disabled={disabled} checked={checked}>
      <Input
        id={id}
        type="radio"
        onChange={onChange}
        name={name}
        checked={checked}
        value={label}
        onBlur={onBlur}
        disabled={disabled}
        aria-checked={checked}
        {...rest}
      />
      <Fill />
      <span>{label}</span>
    </Root>
  </StyledLabel>
);

export default Radio;
