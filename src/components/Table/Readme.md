Table is a component for displaying information in order user to look for patterns and easy to scan details.

<br /> The columns contain `title` - which is presented at the top od the columns and `key` for each column.
<br /> The data props contain object of each keys that are presented in the table cell according to the key.
<br /> The `options` object contains table options like row selection and row actions.

```jsx static
import React from 'react';
import { Table } from '@inplayer-org/inplayer-ui';

class Page extends React.Component {
  render() {
    const columns = [
      {
        title: 'ID',
        key: 'id',
      },
      {
        title: '',
        key: 'icon',
        render: ({value}) => <Icon name={value} />,
      },
      {
        title: 'Name',
        key: 'name',
      },
      {
        title: 'Date Created',
        key: 'dateCreated',
      },
    ];

    const data = [
      {
        id: 22,
        icon: 'music',
        name: "Won't You Be My Neighbour?",
        dateCreated: '2018/07/24',
      },
      {
        id: 28,
        icon: 'code',
        name: 'Soundtrack: No Country',
        dateCreated: '2018/07/21',
      },
    ];

    return (
      <Table
        columns={columns}
        data={data}
        options={{
          rowSelection: {
            active: true,
            action: data => console.log(data),
          },
          rowActions: [
            { icon: 'edit', onClick: id => console.log(id) },
            { icon: 'cog', onClick: id => console.log(id) },
            { icon: 'trash', onClick: id => console.log(id) },
          ],
        }}
      />
    );
  }
}
```

```jsx
const columns = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: '',
    key: 'icon',
    render: value => <Icon name={value} />,
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Date Created',
    key: 'dateCreated',
  },
];

const data = [
  {
    id: 22,
    icon: 'music',
    name: "Won't You Be My Neighbour?",
    dateCreated: '2018/07/24',
  },
  {
    id: 28,
    icon: 'code',
    name: 'Soundtrack: No Country',
    dateCreated: '2018/07/21',
  },
];

<Table
  columns={columns}
  data={data}
  options={{
    rowSelection: {
      active: true,
      action: data => console.log(data),
    },
    rowActions: [
      { icon: 'edit', onClick: id => console.log(id) },
      { icon: 'cog', onClick: id => console.log(id) },
      { icon: 'trash', onClick: id => console.log(id) },
    ],
  }}
/>;
```
