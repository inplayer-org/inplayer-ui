// @flow
import React from 'react';
import Label from '../../elements/Label';
import CheckboxWrapper from './CheckboxWrapper';

type Props = {
  label: Object,
  id: string,
  name: ?string,
  checked: string,
  onChange: (checked: boolean) => any,
};

const Checkbox = ({ label, id, onChange, ...rest }: Props) => {
  const onCheckboxChange = (e: SyntheticEvent<HTMLInputElement>): any => onChange(e.target.checked);

  return (
    <CheckboxWrapper>
      <input type="checkbox" id={id} onChange={onCheckboxChange} {...rest} />
      <Label htmlFor={id}>{label}</Label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
