// @flow
import React, { type Node } from 'react';
import TooltipWrapper from './TooltipWrapper';

type Props = {
  placement: string,
  dataTip: string,
  children: Node,
  /** Defaults to theme secondary color if no value is passed */
  color?: string,
};

const Tooltip = ({ placement, dataTip, children, color }: Props) => (
  <TooltipWrapper color={color}>
    <span tooltip={dataTip} flow={placement}>
      {children}
    </span>
  </TooltipWrapper>
);

Tooltip.defaultProps = {
  color: null,
};

export default Tooltip;
