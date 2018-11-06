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
  saveAction: Function,
};
type State = {};

class Accordion extends Component<Props, State> {
  static AccordionPanelDetails: Element<typeof AccordionPanelDetails>;

  static AccordionPanel: Element<typeof AccordionPanel>;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  toggleOpen = name => {
    this.setState({ [name]: true });
  };

  toggleClose = name => {
    const { saveAction } = this.props;
    if (saveAction) saveAction();
    this.setState({ [name]: false });
  };

  render() {
    const { panels } = this.props;

    const { state } = this;

    return (
      <AccordionWrapper>
        {panels.map((panel, index) => (
          <Accordion.AccordionPanel
            key={index}
            activeTab={state[panel.label]}
            index={index}
            {...panel}
            toggleOpen={e => {
              e.preventDefault();
              this.toggleOpen(panel.label);
            }}
            toggleClose={e => {
              e.preventDefault();
              this.toggleClose(panel.label);
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
