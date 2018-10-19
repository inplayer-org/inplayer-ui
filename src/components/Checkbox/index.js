// @flow
import React from 'react';
import CheckboxInput from './CheckboxInput';
import Label from '../../elements/Label';
import Checkmark from './Checkmark';

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
    <Label htmlFor={id}>
      <Checkmark />
      <CheckboxInput type="checkbox" id={id} onChange={onCheckboxChange} {...rest} />
    </Label>
  );
};

export default Checkbox;
