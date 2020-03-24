import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export type FadeEasing =
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out';

type Props = {
  children: Node;
  offset: number;
  isOpen: boolean;
  placement: string;
  zIndex: number;
  fadeEasing: FadeEasing;
  fadeDuration: number;
};

const fadeAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

type AnimationProps = {
  fadeDuration: number;
  fadeEasing: FadeEasing;
};

const animation = ({ fadeDuration, fadeEasing }: AnimationProps) => css`
  animation: ${fadeDuration}ms ${fadeEasing} 0s 1 ${fadeAnimation};
`;

type ZIndexType = {
  zIndex: number;
};

type BaseProps = AnimationProps & ZIndexType;

const Base = styled('div')<BaseProps>`
  position: absolute;
  width: max-content;
  white-space: pre-line;
  ${props => props.fadeDuration && props.fadeDuration > 0 && animation(props)};
  ${props => props.zIndex && `z-index: ${props.zIndex};`}
`;

type OffsetType = {
  offset: number;
};

const Top = ({ offset }: OffsetType) => styled(Base)`
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: ${offset}px;
`;

const Bottom = ({ offset }: OffsetType) => styled(Base)`
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: ${offset}px;
`;

const Left = ({ offset }: OffsetType) => styled(Base)`
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: ${offset}px;
`;

const Right = ({ offset }: OffsetType) => styled(Base)`
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: ${offset}px;
`;

const toolTips: Record<string, any> = {
  left: Left,
  top: Top,
  right: Right,
  bottom: Bottom,
};

const ToolTip = ({
  children,
  offset,
  isOpen,
  placement,
  zIndex,
  fadeDuration,
  fadeEasing,
  ...props
}: Props) => {
  const Component = toolTips[placement] || toolTips.top;

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
