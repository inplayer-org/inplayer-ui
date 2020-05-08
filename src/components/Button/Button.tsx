import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';

export type Size = 'xs' | 'sm' | 'md' | 'lg';

type ContentProps = {
  icon?: ReactElement | null;
  iconPosition?: string;
  children?: any;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  modifiers?: Array<string>;
  sizeType?: Size;
  fullWidth?: boolean;
  fullHeight?: boolean;
};

export type Props = ButtonProps & ContentProps;

const ContentHolder = styled.span`
  padding: 0.2rem;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.2em;
`;

const Content = ({ icon = null, iconPosition = 'left', children }: ContentProps) => {
  if (iconPosition === 'right') {
    return (
      <ContentHolder>
        {children}
        {icon}
      </ContentHolder>
    );
  }

  return (
    <ContentHolder>
      {icon}
      {children}
    </ContentHolder>
  );
};

const Button = ({
  sizeType = 'md',
  modifiers,
  icon,
  iconPosition,
  children,
  fullWidth,
  fullHeight,
  disabled,
  ...rest
}: Props) => (
  <ButtonWrapper
    sizeType={sizeType}
    modifiers={modifiers}
    fullWidth={fullWidth}
    fullHeight={fullHeight}
    disabled={disabled}
    {...rest}
  >
    <Content icon={icon} iconPosition={iconPosition}>
      {children}
    </Content>
  </ButtonWrapper>
);

export default Button;
