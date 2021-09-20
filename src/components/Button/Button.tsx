import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { TagProps, TrackHierarchy } from '../../analytics';

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
  } & TagProps;

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

const EVENT_TYPE_TO_TRACK_NAME = {
  click: 'click',
  mouseenter: 'hover',
  mouseleave: 'blur',
};

const TrackButton = ({
  hierarchy,
  tracker,
  tag,
  size = 'md',
  position,
  buttonModifiers,
  className = '',
  icon,
  icon,
  iconPosition,
  children,
  fullWidth,
  fullHeight,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: Props & { hierarchy: string[]; tracker: Tracker }) => {
  const trackFn = useMemo(
    () => (event: any) => {
      const name = EVENT_TYPE_TO_TRACK_NAME[event.type];

      if (name) {
        tracker.emit({ on: 'button', name, tag, hierarchy, position });
      }

      if (onMouseEnter && 'mouseenter' === event.type) {
        onMouseEnter(event);
      } else if (onMouseLeave && 'mouseleave' === event.type) {
        onMouseLeave(event);
      } else if (onClick && 'click' === event.type) {
        onClick(event);
      }
    },
    []
  );

  return (
    <ButtonWrapper
      className={className}
      size={size}
      modifiers={buttonModifiers}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      onClick={trackFn}
      onMouseEnter={trackFn}
      onMouseLeave={trackFn}
      {...rest}
    >
      <Content icon={icon} iconPosition={iconPosition}>
        {children}
      </Content>
    </ButtonWrapper>
  );
};

const Button = (props: Props) => (
  <TrackHierarchy.Consumer>
    {({ hierarchy, tracker }) => <TrackButton {...props} hierarchy={hierarchy} tracker={tracker} />}
  </TrackHierarchy.Consumer>
);

export default Button;
