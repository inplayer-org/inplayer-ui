import React, { useState, MouseEvent } from 'react';

// Components
import { Props as TooltipProps } from 'components/Tooltip';
import { AccordionWrapper } from './styled';
import AccordionPanel from './AccordionPanel';
import Arrow from '../../components/NavBar/Arrow';

// Interfaces
interface Panel {
  label: string;
  icon?: Node;
  iconTooltip?: TooltipProps;
  renderContent: () => any;
  disabled: boolean;
}

interface Props {
  panels: Array<Panel>;
  contentHeight: string;
  width?: string;
  extendWidth?: string;
  isExtendable?: boolean;
  onActivePanelChange?: (index: number) => void;
}

const Accordion: React.FC<Props> = ({
  panels,
  contentHeight,
  width,
  extendWidth,
  isExtendable,
  onActivePanelChange,
}: Props) => {
  const [activePanel, setActivePanel] = useState(0);
  const [open, setOpen] = useState(false);

  const openPanel = (panelIndex: number) => {
    if (panelIndex !== activePanel) {
      setActivePanel(panelIndex);
      if (onActivePanelChange) onActivePanelChange(panelIndex);
    }
  };

  const closePanel = (e?: MouseEvent<HTMLButtonElement>) => {
    if (e) e.stopPropagation();
    setActivePanel(-1);
  };

  const togglePanel = (panelIndex: number) => (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (activePanel !== -1) {
      closePanel();
    } else {
      openPanel(panelIndex);
    }
  };

  const toggleOpen = () => {
    if (isExtendable) setOpen(open);
  };

  return (
    <AccordionWrapper
      width={width}
      extendWidth={extendWidth}
      open={open}
      contentHeight={contentHeight}
    >
      <div>
        {panels.map((panel, index) => {
          const { icon, iconTooltip, label, renderContent, disabled } = panel;
          const isActive = activePanel === index;
          const isOtherPanelActive = !isActive && activePanel !== -1;

          return (
            <div key={index}>
              <AccordionPanel
                key={index}
                isActive={isActive}
                icon={icon}
                iconTooltip={iconTooltip}
                label={label}
                renderContent={renderContent}
                closePanel={closePanel}
                isOtherPanelActive={isOtherPanelActive}
                contentHeight={contentHeight}
                disabled={disabled}
                togglePanel={togglePanel(index)}
              />
            </div>
          );
        })}
      </div>
      {isExtendable && activePanel === -1 && (
        <Arrow onClick={toggleOpen} open={open} section="accordion" />
      )}
    </AccordionWrapper>
  );
};

Accordion.defaultProps = {
  width: '100%',
  extendWidth: '20%',
  isExtendable: false,
  onActivePanelChange: undefined,
};

export default Accordion;
