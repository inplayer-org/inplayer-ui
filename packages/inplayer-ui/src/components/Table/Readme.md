Table is a component for displaying information in order user to look for patterns and easy to scan details.

<br /> The columns contain `title` - which is presented at the top od the columns and `key` for each column.
<br /> The data props contain object of each keys that are presented in the table cell according to the key.
<br /> The `options` object contains table options like row selection and row actions.

```jsx static
import React from 'react';
import { Table } from '@inplayer-org/inplayer-ui';

class Page extends React.Component {
  constructor() {
    super();

    this.state = {
      page: 0,
    };

    this.onPageChange = this.onPageChange.bind(this);
  }

  onPageChange(data) {
    this.setState({ page: data.selected });
  }

  render() {
    const columns = [
      {
        title: 'ID',
        key: 'id',
      },
      {
        title: '',
        key: 'icon',
        render: ({ value }) => <Icon name={value} />,
      },
      {
        title: 'Name',
        key: 'name',
      },
      {
        title: 'Date Created',
        key: 'dateCreated',
      },
      {
        title: 'Director',
        key: 'director',
        render: ({ value, rowValues }) => `${value} - ${rowValues.dateCreated}`,
      },
    ];

    const data = [
      {
        id: 22,
        icon: 'music',
        name: "Won't You Be My Neighbour?",
        director: 'Morgan Neville',
        dateCreated: '2018/07/24',
      },
      {
        id: 28,
        icon: 'code',
        name: 'Soundtrack: No Country',
        director: 'Coen Brothers',
        dateCreated: '2018/07/21',
      },
    ];

    const totalPages = Math.ceil(data.length / 5);

    return (
      <React.Fragment>
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
        <Pagination
          pageCount={totalPages}
          currentPage={this.state.page}
          pageRangeDisplayed={5}
          marginPagesDisplayed={5}
          previousLabel="PREV"
          nextLabel="NEXT"
          breakLabel="..."
          onPageChange={this.onPageChange}
        />
      </React.Fragment>
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
    render: ({ value }) => <Icon name={value} />,
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Date Created',
    key: 'dateCreated',
  },
  {
    title: 'Director',
    key: 'director',
    render: ({ value, rowValues }) => `${value} - ${rowValues.dateCreated}`,
  },
];

const data = [
  {
    id: 22,
    icon: 'music',
    name: "Won't You Be My Neighbour?",
    director: 'Morgan Neville',
    dateCreated: '2018/07/24',
  },
  {
    id: 28,
    icon: 'code',
    name: 'Soundtrack: No Country',
    director: 'Coen Brothers',
    dateCreated: '2018/07/21',
  },
];

const totalPages = Math.ceil(data.length / 5);

class TableExample extends React.Component {
  constructor() {
    super();

    this.state = {
      page: 0,
    };

    this.onPageChange = this.onPageChange.bind(this);
  }

  onPageChange(data) {
    this.setState({ page: data.selected });
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h2">With array of row actions</Typography>
        <Input
          type="search"
          placeholder="Search"
          onChange={() => console.log('onChange')}
          style={{ maxWidth: 300 }}
        />
        <br />
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
        <Pagination
          pageCount={totalPages}
          currentPage={this.state.page}
          pageRangeDisplayed={5}
          marginPagesDisplayed={5}
          previousLabel="PREV"
          nextLabel="NEXT"
          breakLabel="..."
          onPageChange={this.onPageChange}
        />
      </React.Fragment>
    );
  }
}
<TableExample />;
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
    render: ({ value }) => <Icon name={value} />,
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Date Created',
    key: 'dateCreated',
  },
  {
    title: 'Director',
    key: 'director',
    render: ({ value, rowValues }) => `${value} - ${rowValues.dateCreated}`,
  },
];

const data = [
  {
    id: 22,
    icon: 'music',
    name: "Won't You Be My Neighbour?",
    director: 'Morgan Neville',
    dateCreated: '2018/07/24',
  },
  {
    id: 28,
    icon: 'code',
    name: 'Soundtrack: No Country',
    director: 'Coen Brothers',
    dateCreated: '2018/07/21',
  },
];

const totalPages = Math.ceil(data.length / 5);

class TableExample extends React.Component {
  constructor() {
    super();

    this.state = {
      page: 0,
    };

    this.onPageChange = this.onPageChange.bind(this);
  }

  onPageChange(data) {
    this.setState({ page: data.selected });
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h2">With rowActions as render prop</Typography>
        <Input
          type="search"
          placeholder="Search"
          onChange={() => console.log('onChange')}
          style={{ maxWidth: 300 }}
        />
        <br />
        <Table
          columns={columns}
          data={data}
          options={{
            rowSelection: {
              active: true,
              action: data => console.log(data),
            },
            rowActions: ({ row }) => <Icon name={row.icon} />,
          }}
          tableButton={{
            label: 'Add new',
            icon: <InPlayerIcon name="add" />,
            onClick: () => console.log('Clicked'),
          }}
        />
        <Pagination
          pageCount={totalPages}
          currentPage={this.state.page}
          pageRangeDisplayed={5}
          marginPagesDisplayed={5}
          previousLabel="PREV"
          nextLabel="NEXT"
          breakLabel="..."
          onPageChange={this.onPageChange}
        />
      </React.Fragment>
    );
  }
}
<TableExample />;
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
    render: ({ value }) => <Icon name={value} />,
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Date Created',
    key: 'dateCreated',
  },
  {
    title: 'Director',
    key: 'director',
    render: ({ value, rowValues }) => `${value} - ${rowValues.dateCreated}`,
  },
];

const data = [
  {
    id: 22,
    icon: 'music',
    name: "Won't You Be My Neighbour?",
    director: 'Morgan Neville',
    dateCreated: '2018/07/24',
  },
  {
    id: 28,
    icon: 'code',
    name: 'Soundtrack: No Country',
    director: 'Coen Brothers',
    dateCreated: '2018/07/21',
  },
];

const totalPages = Math.ceil(data.length / 5);

class TableExample extends React.Component {
  constructor() {
    super();

    this.state = {
      page: 0,
    };

    this.onPageChange = this.onPageChange.bind(this);
  }

  onPageChange(data) {
    this.setState({ page: data.selected });
  }

  renderHeaderSection() {
    const options = [
      { value: 'Option 1', displayName: 'Option 1' },
      { value: 'Option 2', displayName: 'Option 2' },
    ];

    return (
      <div>
        <Dropdown
          options={options}
          value={options[0].value}
          onChange={console.log}
        />
        <Dropdown
          options={options}
          value={options[0].value}
          onChange={console.log}
        />
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h2">With Header Section</Typography>
        <br />
        <Table
          columns={columns}
          data={data}
          options={{
            rowSelection: {
              active: true,
              action: data => console.log(data),
            },
            rowActions: ({ row }) => <Icon name={row.icon} />,
            headerSection: this.renderHeaderSection(),
          }}
          tableButton={{
            label: 'Add new',
            icon: <InPlayerIcon name="add" />,
            onClick: () => console.log('Clicked'),
          }}
        />
        <Pagination
          pageCount={totalPages}
          currentPage={this.state.page}
          pageRangeDisplayed={5}
          marginPagesDisplayed={5}
          previousLabel="PREV"
          nextLabel="NEXT"
          breakLabel="..."
          onPageChange={this.onPageChange}
        />
      </React.Fragment>
    );
  }
}
<TableExample />;
```
