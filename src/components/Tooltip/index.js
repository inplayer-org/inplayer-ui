// @flow
import TooltipHolder from './TooltipHolder';
import TooltipInfo from './TooltipInfo';
import Tipneed from './Tipneed';

type Props = {
  info: string,
};

const Tooltip = (info: Props) =>
  info ? (
    <TooltipHolder>
      <Tipneed>
        <TooltipInfo>{info}</TooltipInfo>
      </Tipneed>
    </TooltipHolder>
  ) : null;

export default Tooltip;
