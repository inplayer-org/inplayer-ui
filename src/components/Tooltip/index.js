// @flow
import React from 'react';
import TooltipWrapper from './TooltipWrapper';

type Props = {
  spanText: object,
  placement: string,
  dataTip: string,
};

const Tooltip = ({ spanText, placement, dataTip }: Props) =>
  spanText ? (
    <TooltipWrapper>
      <p>
        <span tooltip={dataTip} flow={placement}>
          {spanText}
        </span>
      </p>
    </TooltipWrapper>
  ) : null;

export default Tooltip;
