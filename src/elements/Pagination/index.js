// @flow
import React from 'react';
import ReactPaginate from 'react-paginate';

import PaginationWrapper from './PaginationWrapper';

type Props = {
  pageCount: mumber,
  currentPage: number,
  selectPage: () => number,
};

const Pagination = ({ pageCount, currentPage, selectPage }: Props) => (
  <PaginationWrapper>
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={5}
      previousLabel="PREV"
      nextLabel="NEXT"
      forcePage={currentPage}
      onChange={selectPage}
    />
  </PaginationWrapper>
);

export default Pagination;
