import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';
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
    sizeType?: Size;
    fullWidth?: boolean;
    fullHeight?: boolean;
  };

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
  buttonModifiers,
  icon,
  iconPosition,
  children,
  fullWidth,
  fullHeight,
  ...rest
}: Props) => (
  <ButtonWrapper
    sizeType={sizeType}
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
