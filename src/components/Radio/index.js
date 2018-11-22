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
  /** A className can be passed down for further styling or extending with CSS-in-JS */
  className?: string,
  style?: Object,
};

const Radio = ({ label, id, checked, onChange, className, style, ...rest }: Props) => {
  const onRadioChange = (e: SyntheticEvent<HTMLInputElement>): any => onChange(e.target.checked);
  return (
    <RadioWrapper className={className} style={style}>
      <input type="radio" id={id} checked={checked} onChange={onRadioChange} {...rest} />
      <Label htmlFor={id}>{label}</Label>
    </RadioWrapper>
  );
};

Radio.defaultProps = {
  className: '',
  style: {},
};

export default Radio;
