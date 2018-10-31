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
};

const Tooltip = ({ placement, dataTip, children, color, className }: Props) => (
  <TooltipWrapper color={color} className={className}>
    <span tooltip={dataTip} flow={placement}>
      {children}
    </span>
  </TooltipWrapper>
);

Tooltip.defaultProps = {
  className: '',
  color: null,
};

export default Tooltip;
