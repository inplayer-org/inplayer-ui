// @flow
import React from 'react';
import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';

import { uiColors } from 'utils';

type Props = {
  background: string,
  border: string,
  placement: string,
  width: number,
};

const Base = styled('div')`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  background: ${ifProp('background', prop('background'), uiColors('secondary.main'))};
`;

const Up = styled(Base)`
  transform: translateX(-50%) translateY(50%) rotateZ(45deg);
  bottom: 100%;
  left: 50%;
  border-left: 1px solid ${props => props.border};
  border-top: 1px solid ${props => props.border};
`;

const Down = styled(Base)`
  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);
  top: 100%;
  left: 50%;
  border-right: 1px solid ${props => props.border};
  border-bottom: 1px solid ${props => props.border};
`;

const Left = styled(Base)`
  transform: translateX(50%) translateY(-50%) rotateZ(45deg);
  right: 100%;
  top: 50%;
  border-left: 1px solid ${props => props.border};
  border-bottom: 1px solid ${props => props.border};
`;

const Right = styled(Base)`
  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);
  left: 100%;
  top: 50%;
  border-right: 1px solid ${props => props.border};
  border-top: 1px solid ${props => props.border};
`;

const arrows = {
  left: Right,
  top: Down,
  right: Left,
  bottom: Up,
};

const Arrow = ({ background, border, placement, width }: Props) => {
  const Component = arrows[placement] || arrows.top;
  return width > 0 && <Component background={background} border={border} width={width} />;
};

export default Arrow;
