// @flow
import React, { Component } from 'react';

// Components
import type { Props as TooltipProps } from 'components/Tooltip';
import { AccordionWrapper } from './styled';
import AccordionPanel from './AccordionPanel';
import Arrow from '../../components/NavBar/Arrow';

// Types
type Panel = {
  label: string,
  icon?: string,
  iconTooltip?: TooltipProps,
  renderContent: () => any,
  disabled: boolean,
};

type Props = {
  panels: Array<Panel>,
  contentHeight: string,
  width?: string,
  extendWidth?: string,
  isExtendable?: boolean,
  onActivePanelChange?: (index: number) => void,
};

type State = { activePanel: number, open: boolean };

class Accordion extends Component<Props, State> {
  state = { activePanel: -1, open: false };

  openPanel = (panelIndex: number) => {
    const { activePanel } = this.state;
    const { onActivePanelChange } = this.props;

    if (panelIndex !== activePanel) {
      this.setState({ activePanel: panelIndex });
      if (onActivePanelChange) onActivePanelChange(panelIndex);
    }
  };

  closePanel = (e?: SyntheticEvent<*>) => {
    if (e) e.stopPropagation();
    this.setState({ activePanel: -1 });
  };

  togglePanel = (panelIndex: number) => (e: SyntheticEvent<*>) => {
    e.stopPropagation();
    const { activePanel } = this.state;
    if (activePanel !== -1) {
      this.closePanel();
    } else {
      this.openPanel(panelIndex);
    }
  };

  toggleOpen = () => {
    const { isExtendable } = this.props;
    if (isExtendable) this.setState(({ open }) => ({ open: !open }));
  };

  render() {
    const { panels, contentHeight, width, extendWidth, isExtendable } = this.props;

    const { state } = this;
    const { open } = state;

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
            const { activePanel } = state;
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
                  closePanel={this.closePanel}
                  isOtherPanelActive={isOtherPanelActive}
                  contentHeight={contentHeight}
                  disabled={disabled}
                  togglePanel={this.togglePanel(index)}
                />
              </div>
            );
          })}
        </div>
        {isExtendable && <Arrow onClick={this.toggleOpen} open={open} section="accordion" />}
      </AccordionWrapper>
    );
  }
}

Accordion.defaultProps = {
  width: '100%',
  extendWidth: '20%',
  isExtendable: false,
  onActivePanelChange: null,
};

/** @component */
export default Accordion;
