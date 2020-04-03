import React, { useState, ReactChild, ReactNode } from 'react';
import styled, { CSSProperties } from 'styled-components';

import Arrow from './Arrow';
import TooltipWrapper, { FadeEasing } from './TooltipWrapper';
import Bubble from './Bubble';

export type Placement = 'left' | 'right' | 'top' | 'bottom';
export type TooltipBehavior = 'hover' | 'click' | 'ref';

export type Props = {
  behavior?: TooltipBehavior;
  durationOnClick?: number;
  arrowWidth?: number;
  background?: string;
  border?: string;
  childre?: ReactChild;
  color?: string;
  content?: ReactNode;
  fadeEasing?: FadeEasing;
  className?: string;
  style?: CSSProperties;
  fadeDuration?: number;
  fixed?: boolean;
  fontFamily?: string;
  fontSize?: string;
  offset?: number;
  padding?: number;
  placement?: Placement;
  radius?: number;
  zIndex?: number;
  children?: ReactChild | null;
};

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const Tooltip = ({
  behavior = 'hover',
  arrowWidth = 8,
  background = '',
  border = '',
  children = null,
  color = '',
  content,
  style,
  className,
  fadeDuration = 150,
  fadeEasing = 'linear',
  fixed = false,
  fontFamily = 'inherit',
  fontSize = '',
  offset = 0,
  padding = 0.7,
  placement = 'top',
  radius = 0,
  zIndex = 1,
  durationOnClick = 1000,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const timeDelay = (msDuration: number) =>
    new Promise((resolve) => setTimeout(() => resolve(true), msDuration));

  const showTooltip = () => setIsOpen(true);

  const hideTooltip = () => setIsOpen(false);

  const flashTooltip = async () => {
    if (isOpen) return;

    showTooltip();
    await timeDelay(durationOnClick);
    hideTooltip();
  };

  const tooltipElement = (
    <TooltipWrapper
      isOpen={!children || fixed ? true : isOpen}
      placement={placement}
      offset={offset + arrowWidth}
      zIndex={zIndex}
      fadeEasing={fadeEasing}
      fadeDuration={fadeDuration}
    >
      <Bubble
        background={background}
        border={border}
        color={color}
        radius={radius}
        fontFamily={fontFamily}
        fontSize={fontSize}
        padding={padding}
      >
        <Arrow width={arrowWidth} background={background} border={border} placement={placement} />
        {content}
      </Bubble>
    </TooltipWrapper>
  );

  return (
    <Container
      style={style}
      className={className}
      onClick={behavior === 'click' ? flashTooltip : undefined}
      onMouseEnter={behavior === 'hover' && !fixed ? showTooltip : undefined}
      onMouseLeave={behavior === 'hover' && !fixed ? hideTooltip : undefined}
    >
      <>
        {children}
        {tooltipElement}
      </>
    </Container>
  );
};

export default Tooltip;
