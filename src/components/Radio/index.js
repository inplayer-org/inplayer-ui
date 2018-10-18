// @flow
// import React from 'react';
import RadioInput from './RadionInput';
import Label from '../../elements/Label';

type Props = {
  label: Object,
};

const Radio = ({ label }: Props) => (
  <div>
    <RadioInput />
    <Label>{label}</Label>
  </div>
);

export default Radio;
