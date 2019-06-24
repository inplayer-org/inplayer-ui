// @flow
import React, { Component, type Node } from 'react';

// Components
import { AccordionWrapper } from './styled';
import AccordionPanel from './AccordionPanel';
import AccordionFooter from './AccordionFooter';

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

type State = { activePanel: number };

class Accordion extends Component<Props, State> {
  state = { activePanel: -1 };

  openPanel = (panelIndex: number) => (e: SyntheticEvent<*>) => {
    e.preventDefault();
    const { activePanel } = this.state;

    if (panelIndex !== activePanel) {
      this.setState({ activePanel: panelIndex });
    }
  };

  closePanel = (e: SyntheticEvent<*>) => {
    e.preventDefault();
    this.setState({ activePanel: -1 });
  };

  render() {
    const { panels, contentHeight } = this.props;

    const { state } = this;

    return (
      <AccordionWrapper contentHeight={contentHeight}>
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
      </AccordionWrapper>
    );
  }
}

/** @component */
export default Accordion;
