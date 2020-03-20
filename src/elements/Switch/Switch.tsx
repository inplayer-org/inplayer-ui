
import React, { ChangeEvent, CSSProperties } from 'react';
import styled  from 'styled-components';
import Toggle from 'react-toggle';
import SwitchWrapper from './SwitchWrapper';
import Label from '../Label';

interface Props {
  checked: boolean;
  disabled?: boolean;
  id: string;
  label: string;
  onChange: (checked: boolean) => void;
  className?: string;
  style?: CSSProperties;
}

const MarginLeftLabel = styled(Label)<{ disabled?: boolean }>`
  margin-left: 0.5rem;
`;

const Switch = ({ id, checked, label, disabled = false, onChange, className = '', style = {} }: Props) => {
  const onToggleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      onChange(e.target.checked);
    }
  };
  return (
    <SwitchWrapper className={className} style={style}>
      <Toggle
        id={id}
        disabled={disabled}
        checked={checked}
        onChange={onToggleChange}
        icons={false}
      />
      <MarginLeftLabel disabled={disabled} htmlFor={id}>
        {label}
      </MarginLeftLabel>
    </SwitchWrapper>
  );
};




export default Switch;
