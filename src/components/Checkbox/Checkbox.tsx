import React, { ChangeEvent, RefObject } from 'react';
import Label from '../../elements/Label';
import CheckboxWrapper from './CheckboxWrapper';

type Props = {
  label: string;
  id: string;
  name?: string;
  checked: boolean;
  onChange: (checked: boolean) => any;
  containerRef?: RefObject<HTMLDivElement> | null;
  disabled?: boolean;
};

const Checkbox: React.FC<Props> = ({
  label,
  id,
  onChange,
  containerRef = null,
  disabled = false,
  ...rest
}) => {
  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>): any => onChange(e.target.checked);

  return (
    <CheckboxWrapper ref={containerRef}>
      <input disabled={disabled} type="checkbox" id={id} onChange={onCheckboxChange} {...rest} />
      <Label htmlFor={id}>{label}</Label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
