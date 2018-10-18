// @flow
// import React from 'react';
import CheckboxInput from './CheckboxInput';
import Label from '../../elements/Label';

type Props = {
  label: Object,
};

const Checkbox = ({ label }: Props) => (
  <div>
    <CheckboxInput />
    <Label>{label}</Label>
  </div>
);

export default Checkbox;
