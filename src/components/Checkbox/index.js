// @flow
import React from 'react';
import Label from '../../elements/Label';
import CheckboxWrapper from './CheckboxWrapper';

type Props = {
  label: string,
  id: string,
  name: ?string,
  checked: boolean,
  onChange: (checked: boolean) => any,
  /** A className can be passed down for further styling or extending with CSS-in-JS */
  className?: string,
};

const Checkbox = ({ label, id, onChange, className, ...rest }: Props) => {
  const onCheckboxChange = (e: SyntheticEvent<HTMLInputElement>): any => onChange(e.target.checked);

  return (
    <CheckboxWrapper className={className}>
      <input type="checkbox" id={id} onChange={onCheckboxChange} {...rest} />
      <Label htmlFor={id}>{label}</Label>
    </CheckboxWrapper>
  );
};

Checkbox.defaultProps = {
  className: '',
};

export default Checkbox;
