Table

```jsx static
const columns = [
  {
    title: 'Name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: 'Age',
    key: 'age',
  },
];

const data = [
  {
    name: 'Andrej',
    age: 22,
  },
  {
    name: 'Petko',
    age: 28,
  },
];
<Table columns={columns} data={data} />;
```

```jsx
const columns = [
  {
    title: 'Name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: 'Age',
    key: 'age',
  },
];

const data = [
  {
    name: 'Andrej',
    age: 22,
  },
  {
    name: 'Petko',
    age: 28,
  },
];
<Table columns={columns} data={data} />;
```
