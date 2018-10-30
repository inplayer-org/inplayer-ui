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
  className: ?string,
  onClick: (e: SyntheticEvent<HTMLElement>) => any,
};

const Button = ({
  size,
  icon,
  buttonModifiers,
  iconModifiers,
  children,
  className,
  ...rest
}: Props) => (
  <ButtonWrapper className={className} size={size} modifiers={buttonModifiers} {...rest}>
    {icon && <Icon name={icon} modifiers={iconModifiers} />}
    <span>{children}</span>
  </ButtonWrapper>
);

/** @component */
export default Button;
