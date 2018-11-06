import { generateSnapshots } from 'helpers';

import Accordion from '../index';

generateSnapshots(Accordion, {
  panels: [
    {
      label: 'Accordion',
      icon: '',
      content: 'Lorem Ipsum',
      saveAction: () => {
        console.log('Do something!');
      },
    },
  ],
});
