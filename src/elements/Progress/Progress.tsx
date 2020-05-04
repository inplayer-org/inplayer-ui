import React from 'react';
import { Line, Circle } from 'rc-progress';

type ProgressType = 'circle' | 'line';

type Type = {
  /**
   * Progress type
   */
  type?: ProgressType;
};

type RCProgressProps = {
  /**
   * Width of the stroke. Unit is percentage of SVG canvas size
   */
  strokeWidth?: number;
  /**
   * Width of the trail stroke. Unit is percentage of SVG canvas size. Trail is always centered relative to actual progress path. If trailWidth are not defined, it same as strokeWidth.
   */
  trailWidth?: number;
  /**
   * The percent of the progress
   */
  percent?: number | number[];
  /**
   * Stroke color
   */
  strokeColor?: string | string[] | object;
  /**
   * Color for lighter trail stroke underneath the actual progress path
   */
  trailColor?: string;
  /**
   * The shape to be used at the end of the progress bar, can be `butt`, `square` or `round`.
   */
  strokeLinecap?: 'butt' | 'square' | 'round';
  /**
   * Prefix className for component
   */
  prefixCls?: string;
  /**
   * The gap degree of half circle, 0 - 360
   */
  gapDegree?: number;
  /**
   * The gap position, value: top, bottom, left, right.
   */
  gapPosition?: 'top' | 'right' | 'bottom' | 'left';
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
  percent: 0,
  gapDegree: 0,
  gapPosition: 'top',
};

export default Progress;
