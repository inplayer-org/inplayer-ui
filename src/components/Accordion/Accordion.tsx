import React, { useState, SyntheticEvent, ReactElement } from 'react';

// Components
import Arrow from '../NavBar/Arrow';
import { TooltipProps } from '../Tooltip/Tooltip';
import { AccordionWrapper } from './styled';
import AccordionPanel from './AccordionPanel';

// Types
type Panel = {
  label: string;
  icon?: ReactElement;
  iconTooltip?: TooltipProps;
  renderContent: () => any;
  disabled?: boolean;
};

type Props = {
  /**
   * Array of objects
   */
  panels: Array<Panel>;
  /**
   * Determines the height of the wrapper
   */
  contentHeight: string;
  /**
   * Sets the width for the Accordion wrapper
   */
  width?: string;
  /**
   * Defines the width the accordion should extend
   */
  extendWidth?: string;
  /**
   * Display arrow and allow the accordion to extend
   */
  isExtendable?: boolean;
  /**
   * Function to be executed when the accordion tab changes
   */
  onActivePanelChange?: (index: number) => void;
  shouldClose?: boolean;
  onRequestClose?: () => void;
};

export const Accordion = ({
  panels,
  contentHeight = '20%',
  width = '100%',
  extendWidth = '20%',
  isExtendable = false,
  onActivePanelChange,
  shouldClose = true,
  onRequestClose,
}: Props) => {
  const [activePanel, setActivePanel] = useState(-1);
  const [open, setOpen] = useState(false);

  const openPanel = (panelIndex: number) => {
    if (panelIndex !== activePanel) {
      setActivePanel(panelIndex);
      if (onActivePanelChange) onActivePanelChange(panelIndex);
    }
  };

  const closePanel = (e?: SyntheticEvent) => {
    if (e) e.stopPropagation();
    setActivePanel(-1);
    if (onActivePanelChange) onActivePanelChange(-1);
  };

  const togglePanel = (panelIndex: number) => (e: any) => {
    e.stopPropagation();
    if (activePanel !== -1) {
      if (shouldClose) {
        closePanel();
      } else if (onRequestClose) {
        onRequestClose();
      }
    } else {
      openPanel(panelIndex);
    }
  };

  const toggleOpen = () => {
    if (isExtendable) setOpen(!open);
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
          const { icon, iconTooltip, label, renderContent, disabled = false } = panel;
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
        <Arrow onClick={toggleOpen} open={!open} section="accordion" />
      )}
    </AccordionWrapper>
  );
};

export default Accordion;
