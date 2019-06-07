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
type State = { [string]: boolean };

class Accordion extends Component<Props, State> {
  state = {};

  openPanel = (name: string) => (e: SyntheticEvent<*>) => {
    e.preventDefault();
    this.setState({ [name]: true });
  };

  closePanel = (name: string) => (e: SyntheticEvent<*>) => {
    e.preventDefault();
    this.setState({ [name]: false });
  };

  render() {
    const { panels, contentHeight } = this.props;

    const { state } = this;

    return (
      <AccordionWrapper contentHeight={contentHeight}>
        {panels.map((panel, index) => (
          <div key={index}>
            <AccordionPanel
              key={index}
              activeTab={state[panel.label]}
              index={index}
              {...panel}
              openPanel={this.openPanel(panel.label)}
              closePanel={this.closePanel(panel.label)}
              contentHeight={contentHeight}
            />
            <AccordionFooter
              isOpen={state[panel.label]}
              closePanel={this.closePanel(panel.label)}
              actionButton={panel.actionButton}
            />
          </div>
        ))}
      </AccordionWrapper>
    );
  }
}

/** @component */
export default Accordion;
