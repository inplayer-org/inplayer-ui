// @flow
import React from 'react';
import CheckboxInput from './CheckboxInput';
import Label from '../../elements/Label';

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
    <div>
      <CheckboxInput type="checkbox" id={id} onChange={onCheckboxChange} {...rest} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
};

export default Checkbox;
