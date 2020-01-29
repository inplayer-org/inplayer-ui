import { generateSnapshots } from 'packages/inplayer-ui/src/components/Table/tests/helpers';

import Table from '../index';

generateSnapshots(Table, {
  columns: [
    {
      title: 'Name',
      key: 'name',
    },
  ],
  data: [{ name: 'Eli' }],
  options: {
    rowSelection: {
      active: true,
      action: data => console.log(data),
    },
    rowActions: [
      { icon: 'edit', onClick: id => console.log(id) },
      { icon: 'cog', onClick: id => console.log(id) },
      { icon: 'trash', onClick: id => console.log(id) },
    ],
  },
});
