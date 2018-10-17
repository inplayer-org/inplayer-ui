import TooltipHolder from './TooltipHolder';
import TooltipInfo from './TooltipInfo';
import Tipneed from './Tipneed';

const Tooltip = ({ info }) =>
  info ? (
    <TooltipHolder>
      <Tipneed>
        <TooltipInfo>{info}</TooltipInfo>
      </Tipneed>
    </TooltipHolder>
  ) : null;

export default Tooltip;
