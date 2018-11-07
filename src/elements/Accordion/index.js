// @flow
import React, { Component, type Element } from 'react';

// Components
import { AccordionWrapper } from './styled';
import AccordionPanel from './AccordionPanel';

type Props = {
  open: boolean,
  accordionAction: () => any,
};
type State = { name: string };

class Accordion extends Component<Props, State> {
  static AccordionPanel: Element<typeof AccordionPanel>;

  state = {};

  toggleOpen = (e: Object, name: string) => {
    e.preventDefault();
    this.setState({ [name]: true });
  };

  toggleClose = (e: Object, saveOnClose: boolean, name: string, accordionAction: () => any) => {
    e.preventDefault();
    if (saveOnClose) accordionAction();
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
            toggleOpen={e => this.toggleOpen(e, panel.label)}
            toggleClose={(e, saveOnClose) =>
              this.toggleClose(e, saveOnClose, panel.label, panel.accordionAction)
            }
          />
        ))}
      </AccordionWrapper>
    );
  }
}

Accordion.AccordionPanel = AccordionPanel;

/** @component */
export default Accordion;
