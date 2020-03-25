import React, { CSSProperties, ReactChild } from 'react';
import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';

type Size = 'xs' | 'sx' | 'md' | 'lg';

type ContentProps = {
  icon?: Node | null;
  iconPosition?: string;
  children: any;
};

export type Props = HTMLButtonElement &
  ContentProps & {
    buttonModifiers?: Array<string>;
    size?: Size;
    style?: CSSProperties;
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