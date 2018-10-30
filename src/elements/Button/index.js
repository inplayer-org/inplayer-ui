// @flow
import React from 'react';
import Icon from '../Icon';
import ButtonWrapper from './ButtonWrapper';

type Size = 'xs' | 'sm' | 'md' | 'lg';

type Props = {
  icon: ?string,
  children: string,
  buttonModifiers: Array,
  iconModifiers: Array,
  size: Size,
};

const Button = ({ size, icon, buttonModifiers, iconModifiers, children }: Props) => (
  <ButtonWrapper size={size} modifiers={buttonModifiers}>
    {icon && <Icon name={icon} modifiers={iconModifiers} />}
    <span>{children}</span>
  </ButtonWrapper>
);

/** @component */
export default Button;
