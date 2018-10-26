// @flow
import React, { type Node } from 'react';
import TooltipWrapper from './TooltipWrapper';

type Props = {
  placement: string,
  dataTip: string,
  children: Node,
};

const Tooltip = ({ placement, dataTip, children }: Props) => (
  <TooltipWrapper>
    <span tooltip={dataTip} flow={placement}>
      {children}
    </span>
  </TooltipWrapper>
);

export default Tooltip;
