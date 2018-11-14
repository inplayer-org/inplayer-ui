Table is a component for displaying information in order user to look for patterns and easy to scan details. <br />
It takes columns, data, activeCheckbox and activeActiveAction props.
<br /> The columns contain `title` - which is presented at the top od the columns and `key` for each column.
<br /> The data props contain object of each keys that are presented in the table cell according to the key.
<br /> The `activeCheckbox` is a boolean prop and if true it will display checkbox in the first row on each column.
<br /> The `activeAction` object contains title for the column, name of the icon and href prop which indicates where should the icon navigate.

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
];

const data = [
  {
    assetType: 'music',
    name: "Won't You Be My Neighbour?",
    id: 22,
    dateCreated: '2018 / 07 / 24',
  },
  {
    assetType: 'code',
    name: 'Soundtrack: No Country',
    id: 28,
    dateCreated: '2018 / 07 / 21',
  },
];
<Table
  columns={columns}
  data={data}
  activeCheckbox={true}
  activeAction={{ title: 'Edit', icon: 'edit', href: 'test.com' }}
/>;
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
