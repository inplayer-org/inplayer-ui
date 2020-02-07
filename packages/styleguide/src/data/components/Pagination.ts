import { ComponentData } from "../types";

const usage = `
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
`

const demoCode = `
  class PaginationExample extends React.Component {
    constructor() {
      super();

      this.state = {
        page: 0,
        paginateData: {
          total: 50,
          data: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
        },
      };

      this.onPageChange = this.onPageChange.bind(this);
    }

    onPageChange(data) {
      this.setState({ page: data.selected });
    }

    render() {
      return (
        <Pagination
          pageCount={Math.ceil(this.state.paginateData.total / 5)}
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
`;

const Pagination: ComponentData = {
  description: `A component to render a pagination. It takes: 
  - pageCount - the total number of the pages 
  - currentPage - the current number of the page 
  - selectPage - action to select the page
  `,
  path: `src/elements/Pagination/index.js`,
  usage,
  examples: [
    {
      title: 'Demo',
      code: demoCode,
    }
  ],
  propsAndMethods: [
    { name: 'breakLabel', type: 'string', default: 'Required' },
    { name: 'currentPage', type: 'number', default: 'Required' },
    { name: 'marginPagesDisplayed', type: 'number', default: 'Required' },
    { name: 'nextLabel', type: 'string', default: 'Required' },
    { name: 'onPageChange', type: 'function', default: 'Required' },
    { name: 'pageCount', type: 'number', default: 'Required' },
    { name: 'pageRangeDisplayed', type: 'number', default: 'Required' },
    { name: 'previousLabel', type: 'string', default: 'Required' },
    { name: 'activeClassName', type: 'string', default: 'selected' },
    { name: 'activeLinkClassName', type: 'string', default: 'selected' },
    { name: 'breakClassName', type: 'string', default: 'break' },
    { name: 'className', type: 'string'},
    { name: 'containerClassName', type: 'string'},
    { name: 'disableInitialCallback', type: 'boolean', default: 'false'},
    { name: 'disabledClassName', type: 'string', default: 'disabled'},
    { name: 'extraAriaContext', type: 'string'},
    { name: 'hrefBuilder', type: 'function', default: 'Function'},
    { name: 'initialPage', type: 'number', default: '0'},
    { name: 'nextClassName', type: 'string', default: 'next'},
    { name: 'nextLinkClassName', type: 'string', default: 'next'},
    { name: 'pageClassName', type: 'string'},
    { name: 'pageLinkClassName', type: 'string'},
    { name: 'previousClassName', type: 'string', default: 'previous'},
    { name: 'previousLinkClassName', type: 'string', default: 'previous'},
    { name: 'style', type:'Object', default: '{}' },
  ]
}

export default Pagination;