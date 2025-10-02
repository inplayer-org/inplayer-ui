import React, { useState, SyntheticEvent, ReactElement } from 'react';

// Components
import Arrow from './Arrow';
import { TooltipProps } from '../Tooltip/Tooltip';
import { AccordionWrapper } from './styled';
import AccordionPanel from './AccordionPanel';
import { AnalyticsProps } from '../../analytics';

// Types
type Panel = {
  label: string;
  icon?: ReactElement;
  iconTooltip?: TooltipProps;
  renderContent: () => any;
  disabled?: boolean;
} & AnalyticsProps;

type Props = {
  panels: Array<Panel>;
  contentHeight: string;
  width?: string;
  extendWidth?: string;
  isExtendable?: boolean;
  onActivePanelChange?: (index: number, label: string) => void;
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

  const openPanel = (panelIndex: number, label: string) => {
    if (panelIndex !== activePanel) {
      setActivePanel(panelIndex);
      if (onActivePanelChange) onActivePanelChange(panelIndex, label);
    }
  };

  const closePanel = (e?: SyntheticEvent) => {
    if (e) e.stopPropagation();
    setActivePanel(-1);
    if (onActivePanelChange) onActivePanelChange(-1, '');
  };

  const togglePanel = (panelIndex: number, label: string) => (e: any) => {
    e.stopPropagation();
    if (activePanel !== -1) {
      if (shouldClose) {
        closePanel();
      } else if (onRequestClose) {
        onRequestClose();
      }
    } else {
      openPanel(panelIndex, label);
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
          const { icon, iconTooltip, label, renderContent, disabled = false, tag = '' } = panel;
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
                togglePanel={togglePanel(index, label)}
                tag={tag}
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
