import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import ButtonWrapper from './ButtonWrapper';

export type Size = 'xs' | 'sm' | 'md' | 'lg';

type ContentProps = {
  icon?: ReactElement | null;
  iconPosition?: string;
  children?: any;
};

export type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  ContentProps & {
    buttonModifiers?: Array<string>;
    size?: Size;
    className?: string;
    fullWidth?: boolean;
    fullHeight?: boolean;
  };

const ContentHolder = styled.span`
  margin-top: 2px;
`;

const TextIconWrapper = styled.div<{ center: boolean }>`
  padding: 0.2rem;
  ${({ center }) =>
    center &&
    css`
      display: grid;
      grid-auto-flow: column;
      place-items: center;
    `}
`;

const Content = ({ icon = null, iconPosition = 'left', children }: ContentProps) => {
  if (iconPosition === 'right') {
    return (
      <TextIconWrapper center={icon && children}>
        {children && <ContentHolder>{children}</ContentHolder>}
        {icon}
      </TextIconWrapper>
    );
  }

  return (
    <TextIconWrapper center={icon && children}>
      {icon}
      {children && <ContentHolder>{children}</ContentHolder>}
    </TextIconWrapper>
  );
};

const Button = ({
  size = 'md',
  buttonModifiers,
  className = '',
  icon,
  iconPosition,
  children,
  fullWidth,
  fullHeight,
  ...rest
}: Props) => (
  <ButtonWrapper
    className={className}
    size={size}
    modifiers={buttonModifiers}
    fullWidth={fullWidth}
    fullHeight={fullHeight}
    {...rest}
  >
    <Content icon={icon} iconPosition={iconPosition}>
      {children}
    </Content>
  </ButtonWrapper>
);

export default Button;
