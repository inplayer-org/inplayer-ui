import React from 'react';
import { Line, Circle } from 'rc-progress';
import { AnalyticsProps } from '../../analytics';

type ProgressType = 'circle' | 'line';

type Type = {
  type?: ProgressType;
};

type RCProgressProps = {
  strokeWidth?: number;
  trailWidth?: number;
  percent?: number | number[];
  strokeColor?: string | string[] | Record<string, unknown>;
  trailColor?: string;
  strokeLinecap?: 'butt' | 'square' | 'round';
  prefixCls?: string;
  gapDegree?: number;
  gapPosition?: 'top' | 'right' | 'bottom' | 'left';
};

type Props = Type & RCProgressProps & AnalyticsProps;

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
  percent: 0,
  gapDegree: 0,
  gapPosition: 'top',
};

export default Progress;
