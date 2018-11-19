A component to render a pagination. It takes:
<br/> - `pageCount` - the total number of the pages
<br/> - `currentPage` - the current number of the page
<br/> - `selectPage` - action to select the page

```jsx static
import { Pagination } from '@inplayer-org/inplayer-ui';

const paginateData = {
  total: 50,
  data: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
};

const totalPages = Math.ceil(paginateData.total / 5);

class PaginationExample extends React.Component {
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
    );
  }
}
<PaginationExample />;
```

### Demo

```jsx
const paginateData = {
  total: 50,
  data: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
};

const totalPages = Math.ceil(paginateData.total / 5);

class PaginationExample extends React.Component {
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
    );
  }
}
<PaginationExample />;
```
