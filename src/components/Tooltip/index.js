// @flow
import React, { type Node } from 'react';
import TooltipWrapper from './TooltipWrapper';

type Props = {
  placement: string,
  dataTip: string,
  children: Node,
  /** A className can be passed down for further styling or extending with CSS-in-JS */
  className?: string,
  /** Defaults to theme secondary color if no value is passed */
  color?: string,
  style?: Object,
};

const Tooltip = ({ placement, dataTip, children, color, className, style }: Props) => (
  <TooltipWrapper color={color} className={className} style={style}>
    <span tooltip={dataTip} flow={placement}>
      {children}
    </span>
  </TooltipWrapper>
);

Tooltip.defaultProps = {
  className: '',
  color: null,
  style: {},
};

export default Tooltip;
