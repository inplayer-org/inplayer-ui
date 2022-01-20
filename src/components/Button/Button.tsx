import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import ButtonWrapper from './ButtonWrapper';
import {
  AnalyticsProps,
  AnalyticsComponent,
  AnalyticsEvents,
  AnalyticsComponentType,
} from '../../analytics';

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
  } & AnalyticsProps;

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
  tag,
  buttonModifiers,
  className = '',
  icon,
  iconPosition,
  children,
  fullWidth,
  fullHeight,
  onClick,
  ...rest
}: Props) => (
  <AnalyticsComponent>
    {({ pages, tracker, merchantId, ip }) => (
      <ButtonWrapper
        className={className}
        size={size}
        modifiers={buttonModifiers}
        fullWidth={fullWidth}
        fullHeight={fullHeight}
        onClick={(e) => {
          onClick?.(e);

          if (tag) {
            tracker.track({
              event: AnalyticsEvents.CLICK,
              type: AnalyticsComponentType.BUTTON,
              tag,
              pages,
              merchantId,
              ip,
            });
          }
        }}
        {...rest}
      >
        <Content icon={icon} iconPosition={iconPosition}>
          {children}
        </Content>
      </ButtonWrapper>
    )}
  </AnalyticsComponent>
);

export default Button;
