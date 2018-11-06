import { generateSnapshots } from 'helpers';

import Dropdown from '../index';

generateSnapshots(Dropdown, {
  value: 'loremIpsum',
  options: [
    {
      value: 'loremIpsum',
      displayName: 'Lorem Ipsum',
    },
  ],
  onChange: value => {
    console.log(value);
  },
});
