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
  state = {};

  toggleOpen = (name: string) => (e: SyntheticEvent<*>) => {
    e.preventDefault();
    this.setState({ [name]: true });
  };

  toggleClose = (name: string, accordionAction: () => any) => (saveOnClose: boolean) => (
    e: SyntheticEvent<*>
  ) => {
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
          <AccordionPanel
            key={index}
            activeTab={state[panel.label]}
            index={index}
            {...panel}
            toggleOpen={this.toggleOpen(panel.label)}
            toggleClose={this.toggleClose(panel.label, panel.accordionAction)}
          />
        ))}
      </AccordionWrapper>
    );
  }
}

/** @component */
export default Accordion;
