// @flow
import React from 'react';
import RadioInput from './RadionInput';
import Label from '../../elements/Label';

type Props = {
  label: Object,
  id: string,
  name: string,
  value: string,
};

const Radio = ({ label, id, name, value }: Props) => (
  <div>
    <RadioInput type="radio" name={name} id={id} value={value} />
    <Label htmlFor={id}>{label}</Label>
  </div>
);

export default Radio;
