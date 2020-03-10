// @flow
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import uiColors from 'utils/uiColors';

interface Props {
  height?: number;
  width?: number;
  color?: string;
  lineWidth?: number;
  direction?: string;
}

const directions = {
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

const StyledSpinner = styled.svg`
  transform-origin: 50% 65%;

  polygon {
    stroke-dasharray: 17;
    animation: ${dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
    stroke: ${ifProp('color', prop('color'), uiColors('primary.main'))};
  }
`;

const Loader = ({
  height = 100,
  width = 100,
  color,
  lineWidth = 2,
  direction = 'right',
}: Props) => (
  <StyledSpinner color={color} id="triangle" width={width} height={height} viewBox="-3 -4 39 39">
    <polygon
      fill="transparent"
      stroke={color}
      strokeWidth={lineWidth}
      points={directions[direction]}
    />
  </StyledSpinner>
);

export default Loader;
