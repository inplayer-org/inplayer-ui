// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';

type Size = 'xs' | 'sm' | 'md' | 'lg';

type ContentProps = {
  icon?: Node,
  iconPosition?: string,
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

const Content = ({ icon, iconPosition, children }: ContentProps) =>
  iconPosition === 'right' ? (
    <>
      {children && <ContentHolder>{children}</ContentHolder>}
      {icon}
    </>
  ) : (
    <>
      {icon}
      {children && <ContentHolder>{children}</ContentHolder>}
    </>
  );

Content.defaultProps = {
  icon: null,
  iconPosition: 'left',
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
