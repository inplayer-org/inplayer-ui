A component to render a pagination. It takes:
<br/> - `totalItems` - the total number of the items
<br/> - `startPage` - the start number of the page
<br/> - `itemsPerPage` - number of items per page
<br/> - `numberOfPagesDisplayer` - number of pages visible at once
<br/> - `onPageChange` - handler for changing the page

```jsx static
import { Pagination } from '@inplayer-org/inplayer-ui';

const paginateData = {
  total: 100,
};

class PaginationExample extends React.Component {
  constructor() {
    super();

    this.state = {
      page: 1,
    };
  }

  onPageChange = (pageNumber) => {
    this.setState({ page: pageNumber });
  }

  render() {
    return (
      <Pagination
        totalItems={paginateData.total}
        numberOfPagesDisplayed={5}
        startPage={1}
        itemsPerPage={10}
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
  total: 100,
};

class PaginationExample extends React.Component {
  constructor() {
    super();

    this.state = {
      page: 1,
    };

    this.onPageChange = this.onPageChange.bind(this);
  }

  onPageChange(pageNumber) {
    this.setState({ page: pageNumber });
  }

  render() {
    return (
      <Pagination
        totalItems={paginateData.total}
        onPageChange={this.onPageChange}
      />
    );
  }
}
<PaginationExample />;
```
