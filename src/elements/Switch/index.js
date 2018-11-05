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
  /** A className can be passed down for further styling or extending with CSS-in-JS */
  className?: string,
};

const Switch = ({ id, checked, label, disabled, onChange, className }: Props) => {
  const onToggleChange = (e: SyntheticInputEvent<*>) => {
    if (e.target) {
      onChange(e.target.checked);
    }
  };
  return (
    <SwitchWrapper className={className}>
      <Toggle
        id={id}
        disabled={disabled}
        defaultChecked={checked}
        onChange={onToggleChange}
        icons={false}
      />
      <Label disabled={disabled} htmlFor={id}>
        {label}
      </Label>
    </SwitchWrapper>
  );
};

Switch.defaultProps = {
  className: '',
};

/** @component */
export default Switch;
