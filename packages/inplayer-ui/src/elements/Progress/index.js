// @flow
import React from 'packages/inplayer-ui/src/elements/Progress/react';
import { Line, Circle } from 'rc-progress';

type ProgressType = 'circle' | 'line';

type Props = {
  type?: ProgressType,
  /** Width of the stroke. Unit is percentage of SVG canvas size.  */
  strokeWidth?: number,
  /** Stroke color. */
  strokeColor?: string,
  /** Width of the trail stroke. Unit is percentage of SVG canvas size. Trail is always centered relative to actual progress path. If trailWidth are not defined, it same as strokeWidth.  */
  trailWidth?: number,
  /** Color for lighter trail stroke underneath the actual progress path. */
  trailColor?: string,
  /** The shape to be used at the end of the progress bar, can be `butt`, `square` or `round`. */
  strokeLinecap?: string,
  /** prefix className for component */
  prefixCls?: string,
  /** customized className */
  className?: string,
  /** style object will be added to svg element  */
  style?: Object,
  /** the percent of the progress  */
  percent?: number,
  /** the gap degree of half circle, 0 - 360  */
  gapDegree?: number,
  /** the gap position, value: top, bottom, left, right.  */
  gapPosition?: string,
};

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

/** @component */
export default Progress;
