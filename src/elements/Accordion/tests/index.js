import React from 'react';
import { generateSnapshots } from 'helpers';
import Accordion from '../index';

const actionButton = () => <button type="button">Save</button>;

generateSnapshots(Accordion, {
  panels: [
    {
      label: 'Accordion',
      icon: '',
      content: 'Lorem Ipsum',
      renderActionButton: () => actionButton,
      renderFooterLink: () => actionButton,
      // eslint-disable-next-line react/display-name
      renderContent: () => <div>Lorem Ipsum</div>,
    },
  ],
});
