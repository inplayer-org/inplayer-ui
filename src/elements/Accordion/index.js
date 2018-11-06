// @flow
import React, { Component, type Element, type Node } from 'react';

// Components
import { AccordionWrapper } from './styled';
import AccordionPanel from './AccordionPanel';
import AccordionPanelDetails from './AccordionPanelDetails';
import AccordionFooter from './AccordionFooter';

type Props = {
  children: Node,
  open: boolean,
  toggleClose: Function,
};
type State = {};

class Accordion extends Component<Props, State> {
  static AccordionPanel: Element<typeof AccordionPanel>;

  static AccordionPanelDetails: Element<typeof AccordionPanelDetails>;

  render() {
    const { children, toggleClose, open } = this.props;

    return (
      <AccordionWrapper>
        {children}
        {open && <AccordionFooter toggleClose={toggleClose} />}
      </AccordionWrapper>
    );
  }
}

Accordion.AccordionPanel = AccordionPanel;
Accordion.AccordionPanelDetails = AccordionPanelDetails;

/** @component */
export default Accordion;
