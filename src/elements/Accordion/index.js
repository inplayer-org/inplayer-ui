// @flow
import React, { Component, type Element, type Node } from 'react';

// Components
import { AccordionWrapper } from './styled';
import AccordionPanel from './AccordionPanel';
import AccordionPanelDetails from './AccordionPanelDetails';

type Props = {
  children: Node,
  open: boolean,
  toggleClose: Function,
};
type State = {};

class Accordion extends Component<Props, State> {
  static AccordionPanelDetails: Element<typeof AccordionPanelDetails>;

  static AccordionPanel: Element<typeof AccordionPanel>;

  constructor(props) {
    super(props);
    this.state = {
      activeTab: -1,
    };
  }

  activateTab = index => {
    this.setState(prev => ({
      activeTab: prev.activeTab === index ? -1 : index,
    }));
  };

  render() {
    const { panels } = this.props;
    const { activeTab } = this.state;

    return (
      <AccordionWrapper>
        {panels.map((panel, index) => (
          <Accordion.AccordionPanel
            key={index}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={e => {
              e.preventDefault();
              this.activateTab(index);
            }}
          />
        ))}
      </AccordionWrapper>
    );
  }
}

Accordion.AccordionPanel = AccordionPanel;
Accordion.AccordionPanelDetails = AccordionPanelDetails;

/** @component */
export default Accordion;
