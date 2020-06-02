import React, { useState, ReactChild, ReactNode } from 'react';
import styled from 'styled-components';

import Arrow from './Arrow';
import TooltipWrapper, { FadeEasing } from './TooltipWrapper';
import Bubble from './Bubble';

export type Placement = 'left' | 'right' | 'top' | 'bottom';
export type TooltipBehavior = 'hover' | 'click' | 'ref';

export type TooltipProps = {
  /**
   * Tooltip behaviour: `hover` | `click` | `ref`
   */
  behavior?: TooltipBehavior;
  /**
   * How long should the tooltip be present (ms)
   */
  durationOnClick?: number;
  /**
   * Arrow width
   */
  arrowWidth?: number;
  /**
   * Tooltip background color
   */
  background?: string;
  color?: string;
  /**
   * Tooltip content
   */
  content?: ReactNode;
  /**
   * Fade easing type: `linear` | `ease` | `ease-in` | `ease-out` | `ease-in-out`
   */
  fadeEasing?: FadeEasing;
  /**
   * Tooltip placement: `left` | `right` | `top` | `bottom`
   */
  placement?: Placement;
  /**
   * Fade duration in milliseconds
   */
  fadeDuration?: number;
  /**
   * Tooltip border
   */
  border?: string;
  /**
   * Fixed tooltip
   */
  fixed?: boolean;
  /**
   * CSS font-family
   */
  fontFamily?: string;
  /**
   * CSS font-size
   */
  fontSize?: string;
  /**
   * Offset
   */
  offset?: number;
  /**
   * CSS padding
   */
  padding?: number;
  /**
   * Radius
   */
  radius?: number;
  /**
   * CSS z-index
   */
  zIndex?: number;
  /**
   * External class name
   */
  className?: string;
  children?: ReactChild | ReactNode | null;
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
  className = '',
  durationOnClick = 1000,
}: TooltipProps) => {
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
