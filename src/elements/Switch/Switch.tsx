import React, { ChangeEvent } from 'react';
import styled, { CSSProperties } from 'styled-components';
import Toggle from 'react-toggle';
import SwitchWrapper from './SwitchWrapper';
import Label from '../Label';

type SwitchProps = {
  /**
   * Whether the switch is checked or not
   */
  checked: boolean;
  /**
   * Disable switch
   */
  disabled?: boolean;
  /**
   * Id
   */
  id: string;
  /**
   * Switch label
   */
  label: string;
  /**
   * Function executed when the switch value changes
   */
  onChange: (checked: boolean) => void;
  /**
   * External CSS class name
   */
  className?: string;
  /**
   * Inline CSS
   */
  style?: CSSProperties;
};

const MarginLeftLabel = styled(Label)`
  margin-right: 0.5rem;
`;

const Switch = ({
  id,
  checked,
  label,
  disabled = false,
  onChange,
  className = '',
  style = {},
}: SwitchProps) => {
  const onToggleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      onChange(e.target.checked);
    }
  };

  return (
    <SwitchWrapper className={className} style={style}>
      <MarginLeftLabel disabled={disabled} htmlFor={id}>
        {label}
      </MarginLeftLabel>
      <Toggle
        id={id}
        disabled={disabled}
        checked={checked}
        onChange={onToggleChange}
        icons={false}
      />
    </SwitchWrapper>
  );
};

export default Switch;
