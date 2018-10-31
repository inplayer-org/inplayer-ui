// @flow
import React, { type Node } from 'react';
import Icon from '../Icon';
import ButtonWrapper from './ButtonWrapper';

type Size = 'xs' | 'sm' | 'md' | 'lg';

type Props = HTMLButtonElement & {
  icon?: string,
  children: Node,
  buttonModifiers?: Array<string>,
  iconModifiers?: Array<string>,
  size?: Size,
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

Button.defaultProps = {
  size: 'md',
};

/** @component */
export default Button;
