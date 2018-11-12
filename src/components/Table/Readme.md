Table is a component for displaying information in order user to look for patterns and easy to scan details. <br />
It takes columns and data props. Columns contain `title` - which is presented at the top od the columns and `key` for each column. Checkboxes should be added to each row if user wants to manipulate data. The data props contain object of each keys that are presented in the table cell according to the key.

```jsx static
const columns = [
  {
    title: <Checkbox className="checkbox" onChange={e => console.log(e)} />,
    key: 'check',
  },
  {
    title: '',
    key: 'assetType',
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
    check: <Checkbox className="checkbox" onChange={e => console.log(e)} />,
    assetType: <Icon name="music" className="icon" />,
    name: 'Andrej',
    id: 22,
    dateCreated: '2018 / 07 / 24',
    edit: <Icon name="edit" className="icon action" />,
  },
  {
    check: <Checkbox className="checkbox" onChange={e => console.log(e)} />,
    assetType: <Icon name="code" className="icon" />,
    name: 'Petko',
    id: 28,
    dateCreated: '2018 / 07 / 21',
    edit: <Icon name="edit" className="icon action" />,
  },
];
<Table columns={columns} data={data} />;
```

```jsx
const columns = [
  {
    title: <Checkbox className="checkbox" onChange={e => console.log(e)} />,
    key: 'check',
  },
  {
    title: '',
    key: 'assetType',
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
    check: <Checkbox className="checkbox" onChange={e => console.log(e)} />,
    assetType: <Icon name="music" className="icon" />,
    name: 'Andrej',
    id: 22,
    dateCreated: '2018 / 07 / 24',
    edit: <Icon name="edit" className="icon action" />,
  },
  {
    check: <Checkbox className="checkbox" onChange={e => console.log(e)} />,
    assetType: <Icon name="code" className="icon" />,
    name: 'Petko',
    id: 28,
    dateCreated: '2018 / 07 / 21',
    edit: <Icon name="edit" className="icon action" />,
  },
];
<Table columns={columns} data={data} />;
```
