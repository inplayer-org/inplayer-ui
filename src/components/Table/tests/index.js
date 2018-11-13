import { generateSnapshots } from 'helpers';

import Table from '../index';

generateSnapshots(Table, {
  columns: [
    {
      title: 'Name',
      key: 'name',
    },
  ],
  data: [{ name: 'Eli' }],
});
