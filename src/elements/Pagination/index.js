// @flow
import React from 'react';
import ReactPaginate from 'react-paginate';

import PaginationWrapper from './PaginationWrapper';

const Pagination = () => (
  <PaginationWrapper>
    <ReactPaginate
      pageCount={5}
      pageRangeDisplayed={5}
      marginPagesDisplayed={5}
      previousLabel="PREV"
      nextLabel="NEXT"
    />
  </PaginationWrapper>
);

export default Pagination;
