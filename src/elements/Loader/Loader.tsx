import React from 'react';
import styled, { keyframes, CSSProperties } from 'styled-components';

type LoaderProps = {
  /**
   * Height of the svg spinner
   */
  height?: number;
  /**
   * Width of the svg spinner
   */
  width?: number;
  /**
   * Defines the color of the spinner
   */
  color?: string;
  /**
   * Defines the width of the lines
   */
  lineWidth?: number;
  /**
   * Direction of the spinner
   */
  direction?: string;
  /**
   * Inline CSS
   */
  style?: CSSProperties;
};

const directions: Record<string, any> = {
  up: '16,0 32,32 0,32',
  down: '0,0 32,0 16,32',
  right: '0,0 32,16 0,32',
  left: '0,16 32,0 32,32',
};

const dash = keyframes`
  to {
      stroke-dashoffset: 136;
  }
`;

const StyledSpinner = styled.svg<{
  color?: string;
}>`
  transform-origin: 50% 65%;
  stroke: ${({ color }) => color};

  polygon {
    stroke-dasharray: 17;
    animation: ${dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
  }
`;

const Loader = ({
  height = 100,
  width = 100,
  color = '#07AAE6',
  lineWidth = 2,
  direction = 'right',
  style = {},
}: LoaderProps) => (
  <StyledSpinner
    style={style}
    color={color}
    id="triangle"
    width={width}
    height={height}
    viewBox="-3 -4 39 39"
  >
    <polygon
      fill="transparent"
      stroke={color}
      strokeWidth={lineWidth}
      points={directions[direction]}
    />
  </StyledSpinner>
);

export default Loader;
