A component to render a pagination. It takes:
<br/> - `pageCount` - the total number of the pages
<br/> - `currentPage` - the current number of the page
<br/> - `selectPage` - action to select the page

```jsx static
import { Pagination } from '@inplayer-org/inplayer-ui';

function Page(props) {
  return <Pagination />;
}
```

### Demo

```jsx
const paginate = {
  total: 50,
  data: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
};

const totalPages = Math.ceil(paginate.total / 5);

class PaginationExample extends React.Component {
  constructor() {
    super();

    this.state = {
      page: 0,
    };

    this.selectPage = this.selectPage.bind(this);
  }

  selectPage(data) {
    this.setState({ page: data.selected });
  }

  render() {
    return (
      <Pagination
        pageCount={totalPages}
        currentPage={this.state.page}
        selectPage={this.selectPage}
      />
    );
  }
}
<PaginationExample />;
```
