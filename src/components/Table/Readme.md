Table is a component for displaying information in order user to look for patterns and easy to scan details. <br />
It takes columns and data props. Columns contain `title` - which is presented at the top od the columns and `key` for each column. Checkboxes should be added to each row if user wants to manipulate data. The data props contain object of each keys that are presented in the table cell according to the key.

```jsx static
const columns = [
  {
    title: '',
    key: 'assetType',
    render: value => <Icon name={value} className="icon" />,
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'Date Created',
    key: 'dateCreated',
  },
  {
    title: 'Edit',
    key: 'edit',
    render: text => <a href="javascript:;">{text}</a>,
  },
];

const data = [
  {
    assetType: 'music',
    name: 'Andrej',
    id: 22,
    dateCreated: '2018 / 07 / 24',
  },
  {
    assetType: 'code',
    name: 'Petko',
    id: 28,
    dateCreated: '2018 / 07 / 21',
  },
];
<Table columns={columns} data={data} />;
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
  rowSelection={true}
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
