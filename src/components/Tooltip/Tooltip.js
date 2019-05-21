// @flow
import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export type FadeEasing = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

type Props = {
  children: Node,
  offset: number,
  isOpen: boolean,
  placement: string,
  zIndex: number,
  fadeEasing: FadeEasing,
  fadeDuration: number,
};

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const animation = props => css`
  animation: ${props.fadeDuration}ms ${props.fadeEasing} 0s 1 ${fadeAnimation};
`;

const Base = styled('div')`
  position: absolute;
  width: max-content;
  white-space: pre-line;
  ${props => props.fadeDuration && props.fadeDuration > 0 && animation(props)};
  ${props => props.zIndex && `z-index: ${props.zIndex};`};
`;

const Top = styled(Base)`
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: ${props => props.offset}px;
`;

const Bottom = styled(Base)`
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: ${props => props.offset}px;
`;

const Left = styled(Base)`
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: ${props => props.offset}px;
`;

const Right = styled(Base)`
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: ${props => props.offset}px;
`;

const tooltips = {
  left: Left,
  top: Top,
  right: Right,
  bottom: Bottom,
};

const Tooltip = ({
  children,
  offset,
  isOpen,
  placement,
  zIndex,
  fadeDuration,
  fadeEasing,
  ...props
}: Props) => {
  const Component = tooltips[placement] || tooltips.top;

  if (!isOpen) {
    return null;
  }

  return (
    <Component
      offset={offset}
      zIndex={zIndex}
      fadeDuration={fadeDuration}
      fadeEasing={fadeEasing}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Tooltip;
