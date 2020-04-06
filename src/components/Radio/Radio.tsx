import React, { SyntheticEvent } from 'react';
import { Label } from 'elements/Label';
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
  style?: Record<string, any>;
  disabled?: boolean;
}

const Radio: React.FC<Props> = ({
  label,
  id,
  checked,
  onChange,
  className = '',
  style = {},
  onBlur = () => {},
  disabled = false,
  ...rest
}) => (
  <RadioWrapper>
    <input
      type="radio"
      id={id}
      checked={checked}
      onChange={onChange}
      onBlur={onBlur}
      style={style}
      disabled={disabled}
      className={className}
      {...rest}
    />
    <Label htmlFor={id}>{label}</Label>
  </RadioWrapper>
);

export default Radio;
