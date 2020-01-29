import { generateSnapshots } from 'packages/inplayer-ui/src/components/TabNavigation/tests/helpers';

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
