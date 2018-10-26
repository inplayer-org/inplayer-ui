// @flow
import React from 'react';
import TooltipWrapper from './TooltipWrapper';

type Props = {
  info: object,
  position: string,
  dataTooltip: string,
};

const Tooltip = ({ info, position, dataTooltip }: Props) =>
  info ? (
    <TooltipWrapper position={position}>
      <p>
        <span tooltip={dataTooltip} flow={position}>
          {info}
        </span>
      </p>
    </TooltipWrapper>
  ) : null;

export default Tooltip;
