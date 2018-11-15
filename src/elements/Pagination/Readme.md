Pagination

```jsx static
import { Pagination } from '@inplayer-org/inplayer-ui';

function Page(props) {
  return <Pagination />;
}
```

### Demo

```jsx
class PaginationExample extends React.Component {
  constructor() {
    super();

    this.state = {
      page: 0,
    };
  }

  render() {
    const paginate = {
      total: 50,
      data: [{ id: 1, name: 'test' }, { id: 2, name: 'test2' }],
    };

    const totalPages = Math.ceil(paginate.total / 5);

    return (
      <Pagination
        pageCount={totalPages}
        currentPage={this.state.page}
        selectPage={e => console.log(e)}
      />
    );
  }
}
<PaginationExample />;
```
