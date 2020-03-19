import React, { ChangeEvent } from 'react';
import Label from 'elements/Label';
import CheckboxWrapper from './CheckboxWrapper';

type Props = {
  label: string;
  id: string;
  name?: string;
  checked?: boolean;
  onChange: (checked: boolean) => any;
  containerRef?: React.RefObject<HTMLDivElement>;
  /** A className can be passed down for further styling or extending with CSS-in-JS */
  className?: string;
  style?: Record<string, any>;
  disabled?: boolean;
};

const Checkbox = ({ label, id, onChange, containerRef, className, style, ...rest }: Props) => {
  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked);

  return (
    <CheckboxWrapper className={className} style={style} ref={containerRef}>
      <input type="checkbox" id={id} onChange={onCheckboxChange} {...rest} />
      <Label htmlFor={id}>{label}</Label>
    </CheckboxWrapper>
  );
};

Checkbox.defaultProps = {
  className: '',
  style: {},
  containerRef: null,
  disabled: false,
};

export default Checkbox;
