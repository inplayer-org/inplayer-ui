import React, {
  useState,
  ReactChild,
  ReactNode,
  forwardRef,
  useImperativeHandle,
  Ref,
} from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';
import TooltipWrapper, { FadeEasing } from './TooltipWrapper';
import Bubble from './Bubble';
import { AnalyticsProps } from '../../analytics';

export interface FlashTooltipRef {
  flashTooltip: () => Promise<void>;
}

export type Placement = 'left' | 'right' | 'top' | 'bottom';
export type TooltipBehavior = 'hover' | 'click' | 'ref';

export type TooltipProps = {
  behavior?: TooltipBehavior;
  durationOnClick?: number;
  arrowWidth?: number;
  background?: string;
  color?: string;
  content?: ReactNode;
  fadeEasing?: FadeEasing;
  placement?: Placement;
  fadeDuration?: number;
  border?: string;
  fixed?: boolean;
  fontSize?: string;
  offset?: number;
  padding?: number;
  radius?: number;
  zIndex?: number;
  className?: string;
  children?: ReactChild | ReactNode | null;
  ref: Ref<FlashTooltipRef>;
} & AnalyticsProps;

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const Tooltip = forwardRef<FlashTooltipRef, TooltipProps>(
  (
    {
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
      fontSize = '',
      offset = 0,
      padding = 0.7,
      placement = 'top',
      radius = 0,
      zIndex = 1,
      className = '',
      durationOnClick = 1000,
    },
    ref
  ) => {
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

    useImperativeHandle(ref, () => ({
      flashTooltip,
    }));

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
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
