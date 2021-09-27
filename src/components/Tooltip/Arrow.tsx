import React from 'react';
import styled from 'styled-components';
import { AnalyticsProps } from '../../analytics';

type ArrowsProps = {
  width: number;
  background?: string;
  border: string;
  placement: string;
};

const Base = styled.div<ArrowsProps>`
  position: absolute;
  ${({ width }) => width && `width: ${width}px;`};
  ${({ width }) => width && `height: ${width}px;`};
  background: ${({ background, theme }) => background || theme.palette.secondary.main};
`;

const Up = styled(Base)`
  transform: translateX(-50%) translateY(50%) rotateZ(45deg);
  bottom: 100%;
  left: 50%;
  ${({ border }) => border && `border-left: 1px solid ${border};`}
  ${({ border }) => border && `border-top: 1px solid ${border};`}
`;

const Down = styled(Base)`
  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);
  top: 100%;
  left: 50%;
  ${({ border }) => border && `border-right: 1px solid ${border}`}
  ${({ border }) => border && `border-bottom: 1px solid ${border}`}
`;

const Left = styled(Base)`
  transform: translateX(50%) translateY(-50%) rotateZ(45deg);
  right: 100%;
  top: 50%;
  ${({ border }) => border && `border-left: 1px solid ${border}`}
  ${({ border }) => border && `border-bottom: 1px solid ${border}`}
`;

const Right = styled(Base)`
  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);
  left: 100%;
  top: 50%;
  ${({ border }) => border && `border-right: 1px solid ${border}`}
  ${({ border }) => border && `border-top: 1px solid ${border}`}
`;

const arrows: Record<string, any> = {
  left: Right,
  top: Down,
  right: Left,
  bottom: Up,
};

type Props = {
  background: string;
  border: string;
  placement: string;
  width: number;
} & AnalyticsProps;

const Arrow = ({ background, border, placement, width }: Props) => {
  const Component = arrows[placement] || arrows.top;
  return width > 0 ? <Component background={background} border={border} width={width} /> : null;
};

export default Arrow;
