// @flow
import React from 'react';
import CheckboxInput from './CheckboxInput';
import Label from '../../elements/Label';

type Props = {
  label: Object,
  id: string,
  name: string,
  value: string,
};

const Checkbox = ({ label, id, name, value }: Props) => (
  <div>
    <CheckboxInput type="checkbox" name={name} id={id} value={value} />
    <Label htmlFor={id}>{label}</Label>
  </div>
);

export default Checkbox;
