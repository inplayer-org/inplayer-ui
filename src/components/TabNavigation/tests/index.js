import { generateSnapshots } from 'helpers';

import TabNavigation from '../index';

generateSnapshots(TabNavigation, {
  tabs: [
    {
      title: 'Hello',
    },
  ],
  onTabClick: console.log,
  selectedTabIndex: 0,
});
