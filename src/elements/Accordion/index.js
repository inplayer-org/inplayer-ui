// @flow
import React, { Component } from 'react';

// Components
import { AccordionWrapper } from './styled';
import AccordionPanel from './AccordionPanel';

type Panel = {
  label: string,
  icon?: string,
  renderContent: () => any,
  footerLink: string,
  buttonText: string,
  accordionAction: () => any,
};

type Props = {
  panels: Array<Panel>,
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
