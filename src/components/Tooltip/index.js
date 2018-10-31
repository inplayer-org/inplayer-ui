// @flow
import React, { type Node } from 'react';
import TooltipWrapper from './TooltipWrapper';

type Props = {
  placement: string,
  dataTip: string,
  children: Node,
  /** A className can be passed down for further styling or extending with CSS-in-JS */
  className?: string,
};

const Tooltip = ({ placement, dataTip, children, className }: Props) => (
  <TooltipWrapper className={className}>
    <span tooltip={dataTip} flow={placement}>
      {children}
    </span>
  </TooltipWrapper>
);

Tooltip.defaultProps = {
  className: '',
};

export default Tooltip;
