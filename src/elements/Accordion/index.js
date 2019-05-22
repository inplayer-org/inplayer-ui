// @flow
import React, { Component } from 'react';

// Components
import { AccordionWrapper } from './styled';
import AccordionPanel from './AccordionPanel';
import AccordionFooter from './AccordionFooter';

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
  contentHeight: string,
};
type State = { [string]: boolean };

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
              toggleOpen={this.toggleOpen(panel.label)}
              toggleClose={this.toggleClose(panel.label, panel.accordionAction)}
              contentHeight={contentHeight}
            />
            <AccordionFooter
              isOpen={state[panel.label]}
              toggleClose={this.toggleClose(panel.label, panel.accordionAction)}
              accordionAction={panel.accordionAction}
              footerLink={panel.footerLink}
              buttonText={panel.buttonText}
            />
          </div>
        ))}
      </AccordionWrapper>
    );
  }
}

/** @component */
export default Accordion;
