// @flow
import React from 'react';
import RadioInput from './RadionInput';
import Label from '../../elements/Label';

type Props = {
  label: Object,
  id: string,
  name: ?string,
  value: boolean,
  onChange: (checked: boolean) => any,
};

const Radio = ({ label, id, value, onChange, ...rest }: Props) => {
  const onRadioChange = (e: SyntheticEvent<HTMLInputElement>): any => onChange(e.target.checked);
  return (
    <div>
      <RadioInput type="radio" id={id} checked={value} onChange={onRadioChange} {...rest} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
};

export default Radio;
