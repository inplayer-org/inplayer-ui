// @flow
import React, { Component, type Element } from 'react';

// Components
import { AccordionWrapper } from './styled';
import AccordionPanel from './AccordionPanel';
import AccordionPanelDetails from './AccordionPanelDetails';

type Props = {
  open: boolean,
  toggleClose: Function,
  saveAction: Function,
};
type State = { name: string };

class Accordion extends Component<Props, State> {
  static AccordionPanelDetails: Element<typeof AccordionPanelDetails>;

  static AccordionPanel: Element<typeof AccordionPanel>;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  toggleOpen = (name: string) => {
    this.setState({ [name]: true });
  };

  toggleClose = (name: string) => {
    this.setState({ [name]: false });
  };

  save = (name: string, saveAction: Function) => {
    saveAction();
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
            save={e => {
              e.preventDefault();
              this.save(panel.label, panel.saveAction);
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
