import React from 'react';
import Accordion from './index';

export default {
  component: Accordion,
  title: 'Accordion',
};

export const withText = () => {
  const panels = [
    {
      label: 'Accordion1',
      icon: 'info-circle',
      renderContent: ({ closePanel }) => (
        <div>
          <h1>Long Content for the accordion1</h1>
          <h1>Long Content for the accordion1</h1>
          <h1>Long Content for the accordion1</h1>
          <h1>Long Content for the accordion1</h1>
          <h1>Long Content for the accordion1</h1>
          <h1>Long Content for the accordion1</h1>
        </div>
      ),
    },
    {
      label: 'Accordion2',
      icon: 'info-circle',
      iconTooltip: {
        content: 'This is a disabled panel with optional icon with a tooltip',
        placement: 'left',
      },
      renderContent: ({ closePanel }) => <h5>Content for the accordionh2</h5>,
      disabled: true,
    },
    {
      label: 'Accordion3',
      renderContent: () => <h5>Content for the accordionh3</h5>,
    },
  ];

  return (
    <Accordion
      onActivePanelChange={index => console.log(index)}
      panels={panels}
      contentHeight="46vh"
      isExtendable
      width="80%"
      extendWidth="20%"
    />
  );
};
