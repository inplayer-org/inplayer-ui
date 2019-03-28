// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import ButtonWrapper from './ButtonWrapper';

type Size = 'xs' | 'sm' | 'md' | 'lg';

type ContentProps = {
  icon?: string | Node,
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

const ContentHolder = styled.span`
  padding: 0.2rem;
`;

const Content = ({ icon, iconPosition, iconModifiers, children }: ContentProps) => {
  const iconContent =
    typeof icon === 'string' ? <Icon name={icon} modifiers={iconModifiers} /> : icon;

  return iconPosition === 'right' ? (
    <>
      {children && <ContentHolder>{children}</ContentHolder>}
      {icon && iconContent}
    </>
  ) : (
    <>
      {icon && iconContent}
      {children && <ContentHolder>{children}</ContentHolder>}
    </>
  );
};

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
