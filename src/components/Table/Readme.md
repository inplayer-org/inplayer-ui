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
