// @flow
import React, { Component, type Node } from 'react';

// Components
import { AccordionWrapper } from './styled';
import AccordionPanel from './AccordionPanel';
import AccordionFooter from './AccordionFooter';
import Arrow from '../../components/NavBar/Arrow';

type Panel = {
  label: string,
  icon?: string,
  renderContent: () => any,
  renderActionButton: ({
    closeAccordion: (e?: SyntheticEvent<*>) => void,
  }) => Node,
};

type Props = {
  panels: Array<Panel>,
  contentHeight: string,
  width?: string,
  extendWidth?: string,
  enableExtendAccordion?: boolean,
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
    const { enableExtendAccordion } = this.props;
    console.log('HERERE');
    if (enableExtendAccordion) this.setState(({ open }) => ({ open: !open }));
  };

  render() {
    const { panels, contentHeight, width, extendWidth, enableExtendAccordion } = this.props;

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
            const { icon, label, renderActionButton, renderContent } = panel;
            const { activePanel } = state;

            return (
              <div key={index}>
                <AccordionPanel
                  key={index}
                  isActive={activePanel === index}
                  icon={icon}
                  label={label}
                  renderContent={renderContent}
                  openPanel={this.openPanel(index)}
                  closePanel={this.closePanel}
                  contentHeight={contentHeight}
                />
                <AccordionFooter
                  isActive={activePanel === index}
                  closePanel={this.closePanel}
                  renderActionButton={renderActionButton}
                />
              </div>
            );
          })}
        </div>
        {enableExtendAccordion && (
          <Arrow onClick={this.toggleOpen} open={open} section="accordion" />
        )}
      </AccordionWrapper>
    );
  }
}

Accordion.defaultProps = {
  width: '100%',
  extendWidth: '20%',
  enableExtendAccordion: false,
};

/** @component */
export default Accordion;
