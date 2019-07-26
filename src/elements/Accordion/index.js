// @flow
import React, { Component, type Node } from 'react';

// Components
import { Props as TooltipProps } from 'components/Tooltip';
import { AccordionWrapper } from './styled';
import AccordionPanel from './AccordionPanel';
import AccordionFooter from './AccordionFooter';
import Arrow from '../../components/NavBar/Arrow';

// Types
type Panel = {
  label: string,
  icon?: string,
  iconTooltip?: TooltipProps,
  renderContent: () => any,
  renderActionButton: ({
    closeAccordion: (e?: SyntheticEvent<*>) => void,
  }) => Node,
  renderFooterLink: ({
    closeAccordion: (e?: SyntheticEvent<*>) => void,
  }) => Node,
};

type Props = {
  panels: Array<Panel>,
  contentHeight: string,
  width?: string,
  extendWidth?: string,
  isExtendable?: boolean,
};

type State = { activePanel: number, open: boolean };

class Accordion extends Component<Props, State> {
  state = { activePanel: -1, open: false };

  openPanel = (panelIndex: number) => (e: SyntheticEvent<*>) => {
    e.stopPropagation();
    const { activePanel } = this.state;

    if (panelIndex !== activePanel) {
      this.setState({ activePanel: panelIndex });
    }
  };

  closePanel = (e?: SyntheticEvent<*>) => {
    if (e) e.stopPropagation();
    this.setState({ activePanel: -1 });
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
            const {
              icon,
              iconTooltip,
              label,
              renderActionButton,
              renderContent,
              renderFooterLink,
              disabled,
            } = panel;
            const { activePanel } = state;
            const isActive = activePanel === index;
            const otherPanelIsActive = !isActive && activePanel !== -1;

            return (
              <div key={index}>
                <AccordionPanel
                  key={index}
                  isActive={isActive}
                  icon={icon}
                  iconTooltip={iconTooltip}
                  label={label}
                  renderContent={renderContent}
                  openPanel={this.openPanel(index)}
                  closePanel={this.closePanel}
                  otherPanelIsActive={otherPanelIsActive}
                  contentHeight={contentHeight}
                  disabled={disabled}
                />
                <AccordionFooter
                  isActive={activePanel === index}
                  closePanel={this.closePanel}
                  renderActionButton={renderActionButton}
                  renderFooterLink={renderFooterLink}
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
};

/** @component */
export default Accordion;
