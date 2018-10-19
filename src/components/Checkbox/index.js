// @flow
import React from 'react';
import CheckboxInput from './CheckboxInput';
import Label from '../../elements/Label';

type Props = {
  label: Object,
  id: string,
  name: string,
  value: boolean,
  onChange: { checked: boolean },
};

const Checkbox = ({ label, id, value, ...rest }: Props) => (
  <div>
    <CheckboxInput type="checkbox" id={id} checked={value} {...rest} />
    <Label htmlFor={id}>{label}</Label>
  </div>
);

export default Checkbox;
