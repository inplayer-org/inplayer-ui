// @flow
import React from 'react';
import RadioWrapper from './RadioWrapper';
import Label from '../../elements/Label';

type Props = {
  label: string,
  id: string,
  name: ?string,
  checked: boolean,
  onChange: (checked: boolean) => any,
};

const Radio = ({ label, id, checked, onChange, ...rest }: Props) => {
  const onRadioChange = (e: SyntheticEvent<HTMLInputElement>): any => onChange(e.target.checked);
  return (
    <RadioWrapper>
      <input type="radio" id={id} checked={checked} onChange={onRadioChange} {...rest} />
      <Label htmlFor={id}>{label}</Label>
    </RadioWrapper>
  );
};

export default Radio;
