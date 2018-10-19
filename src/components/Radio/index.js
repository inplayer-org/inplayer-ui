// @flow
import React from 'react';
import RadioInput from './RadionInput';
import Label from '../../elements/Label';

type Props = {
  label: Object,
  id: string,
  name: string,
  value: boolean,
  onChange: { checked: boolean },
};

const Radio = ({ label, id, value, ...rest }: Props) => (
  <div>
    <RadioInput type="radio" id={id} checked={value} {...rest} />
    <Label htmlFor={id}>{label}</Label>
  </div>
);

export default Radio;
