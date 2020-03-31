import React from 'react';
import { Line, Circle, RCProgressProps } from 'rc-progress';

type ProgressType = 'circle' | 'line';

type Type = {
  type?: ProgressType;
};

type Props = Type & RCProgressProps;

const Progress = ({ type, ...rest }: Props) =>
  type === 'circle' ? <Circle {...rest} /> : <Line {...rest} />;

Progress.defaultProps = {
  type: 'circle',
  strokeWidth: 1,
  strokeColor: '#07AAE6',
  trailWidth: 1,
  trailColor: '#d7dde5',
  strokeLinecap: 'round',
  prefixCls: 'rc-progress',
  className: '',
  percent: 0,
  gapDegree: 0,
  gapPosition: 'top',
  style: {},
};

export default Progress;
