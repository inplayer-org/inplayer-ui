// @flow
import React, { type Node } from 'react';
import Icon from '../Icon';
import ButtonWrapper from './ButtonWrapper';

type Size = 'xs' | 'sm' | 'md' | 'lg';

type ContentProps = {
  icon?: string,
  iconPosition?: string,
  iconModifiers?: Array<string>,
  children: Node,
};

type Props = HTMLButtonElement &
  ContentProps & {
    buttonModifiers?: Array<string>,
    size?: Size,
    style?: Object,
    className?: string,
  };

const Content = ({ icon, iconPosition, iconModifiers, children }: ContentProps) =>
  iconPosition === 'right' ? (
    <React.Fragment>
      <span>{children}</span>
      {icon && <Icon name={icon} modifiers={iconModifiers} />}
    </React.Fragment>
  ) : (
    <React.Fragment>
      {icon && <Icon name={icon} modifiers={iconModifiers} />}
      <span>{children}</span>
    </React.Fragment>
  );

Content.defaultProps = {
  icon: null,
  iconPosition: 'left',
  iconModifiers: [],
};

const Button = ({ size, buttonModifiers, className, style, ...rest }: Props) => (
  <ButtonWrapper
    className={className}
    style={style}
    size={size}
    modifiers={buttonModifiers}
    {...rest}
  >
    <Content {...rest} />
  </ButtonWrapper>
);

Button.defaultProps = {
  size: 'md',
  style: {},
  className: '',
};

/** @component */
export default Button;
