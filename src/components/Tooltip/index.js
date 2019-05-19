// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Arrow from './Arrow';
import TooltipWrapper from './Tooltip';
import Bubble from './Bubble';
import type { FadeEasing } from './Tooltip';

export type Placement = 'left' | 'right' | 'top' | 'bottom';

type Props = {
  arrowWidth?: number,
  background?: string,
  border?: string,
  children?: Node,
  color?: string,
  content: Node,
  className?: string,
  style?: string,
  fadeDuration?: number,
  fadeEasing?: FadeEasing,
  fixed?: boolean,
  fontFamily?: string,
  fontSize?: string,
  offset?: number,
  padding?: number,
  placement?: Placement,
  radius?: number,
  zIndex?: number,
};

type State = {
  isOpen: boolean,
};

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

class Tooltip extends PureComponent<Props, State> {
  state = {
    isOpen: false,
  };

  handleMouseEnter = () => {
    this.setState({ isOpen: true });
  };

  handleMouseLeave = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const {
      arrowWidth,
      background,
      border,
      children,
      color,
      content,
      style,
      className,
      fadeDuration,
      fadeEasing,
      fixed,
      fontFamily,
      fontSize,
      offset,
      padding,
      placement,
      radius,
      zIndex,
    } = this.props;

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
    return children ? (
      <Container
        style={style}
        className={className}
        onMouseEnter={!fixed ? this.handleMouseEnter : undefined}
        onMouseLeave={!fixed ? this.handleMouseLeave : undefined}
      >
        {children}
        {tooltipElement}
      </Container>
    ) : (
      <Container className={className} style={style}>
        {tooltipElement}
      </Container>
    );
  }
}

Tooltip.defaultProps = {
  arrowWidth: 8,
  background: '',
  border: '',
  children: null,
  color: '',
  fadeDuration: 0,
  fadeEasing: 'linear',
  fixed: false,
  fontFamily: 'inherit',
  fontSize: 'inherit',
  offset: 0,
  padding: 1,
  placement: 'top',
  radius: 0,
  zIndex: 1,
  style: null,
  className: null,
};

export default Tooltip;
