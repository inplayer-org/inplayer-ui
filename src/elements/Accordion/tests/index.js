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
    },
  ],
});
