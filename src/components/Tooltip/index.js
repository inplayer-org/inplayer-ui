// @flow
import React from 'react';
import TooltipWrapper from './TooltipWrapper';

type Props = {
  placement: string,
  dataTip: string,
  info: string,
};

const Tooltip = ({ placement, dataTip, ...rest }: Props) => (
  <TooltipWrapper>
    <span tooltip={dataTip} flow={placement} {...rest} />
  </TooltipWrapper>
);

export default Tooltip;
