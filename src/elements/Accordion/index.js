// @flow
import React, { Component, type Node } from 'react';

// Components
import { AccordionWrapper } from './styled';
import AccordionPanel from './AccordionPanel';
import AccordionFooter from './AccordionFooter';
import Arrow from './Arrow';

type Panel = {
  label: string,
  icon?: string,
  renderContent: () => any,
  actionButton: () => Node,
};

type Props = {
  panels: Array<Panel>,
  contentHeight: string,
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

  closePanel = (e: SyntheticEvent<*>) => {
    e.stopPropagation();
    this.setState({ activePanel: -1 });
  };

  toggleOpen = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    const { panels, contentHeight } = this.props;

    const { state } = this;
    const { open } = state;

    return (
      <AccordionWrapper contentHeight={contentHeight} open={open} onClick={this.toggleOpen}>
        <div>
          {panels.map((panel, index) => {
            const { icon, label, actionButton, renderContent } = panel;
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
                  actionButton={actionButton}
                />
              </div>
            );
          })}
        </div>

        <Arrow open={open} />
      </AccordionWrapper>
    );
  }
}

/** @component */
export default Accordion;
