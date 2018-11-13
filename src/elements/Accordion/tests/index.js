import React from 'react';
import { generateSnapshots } from 'helpers';
import Accordion from '../index';

generateSnapshots(Accordion, {
  panels: [
    {
      label: 'Accordion',
      icon: '',
      content: 'Lorem Ipsum',
      accordionAction: () => {
        console.log('Do something!');
      },
      // eslint-disable-next-line react/display-name
      renderContent: () => <div>Lorem Ipsum</div>,
    },
  ],
});
