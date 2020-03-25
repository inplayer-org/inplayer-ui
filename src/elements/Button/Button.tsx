import React, { Node, CSSStyleDeclaration, ReactChild } from 'react';
import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';

type Size = 'xs' | 'sx' | 'md' | 'lg';

type ContentProps = {
  icon?: Node;
  iconPosition?: string;
  children: ReactChild;
};

type Props = HTMLButtonElement &
  ContentProps & {
    buttonModifiers?: Array<string>;
    size?: Size;
    className?: string;
  };

const ContentHolder = styled.span`
  padding: 0.2rem;
`;

const Content = ({
  icon = null,
  iconPosition = 'left',
  children,
}: ContentProps) => {
  if (iconPosition === 'right') {
    return (
      <>
        {children && <ContentHolder>{children}</ContentHolder>}
        {icon}
      </>
    );
  }

  return (
    <>
      {icon}
      {children && <ContentHolder>{children}</ContentHolder>}
    </>
  );
};

const Button = ({
  size = 'md',
  buttonModifiers,
  className = '',
  style,
  ...rest
}: Props) => {
  <ButtonWrapper
    className={className}
    style={style}
    size={size}
    modifiers={buttonModifiers}
    {...rest}
  >
    <Content {...rest} />
  </ButtonWrapper>;
};

export default Button;
