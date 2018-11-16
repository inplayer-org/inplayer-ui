// @flow
import React from 'react';
import ReactPaginate from 'react-paginate';

import PaginationWrapper from './PaginationWrapper';

type Props = {
  pageCount: mumber,
  currentPage: number,
  pageRangeDisplayed: number,
  marginPagesDisplayed: number,
  previousLabel: string,
  nextLabel: string,
  breakLabel: string,
  onPageChange: () => number,
  breakClassName?: string,
  initialPage?: number,
  disableInitialCallback?: boolean,
  containerClassName?: string,
  pageClassName?: string,
  pageLinkClassName?: string,
  activeClassName?: string,
  activeLinkClassName?: string,
  previousClassName?: string,
  nextClassName?: string,
  previousLinkClassName?: string,
  nextLinkClassName?: string,
  disabledClassName?: string,
  hrefBuilder?: () => String,
  extraAriaContext?: string,
  style?: Object,
  className?: string,
};

const Pagination = ({ style, className, ...rest }: Props) => (
  <PaginationWrapper style={style} className={className}>
    <ReactPaginate {...rest} />
  </PaginationWrapper>
);

Pagination.defaultProps = {
  breakClassName: 'break',
  initialPage: 0,
  disableInitialCallback: false,
  containerClassName: '',
  pageClassName: '',
  pageLinkClassName: '',
  activeClassName: 'selected',
  activeLinkClassName: 'selected',
  previousClassName: 'previous',
  nextClassName: 'next',
  previousLinkClassName: 'previous',
  nextLinkClassName: 'next',
  disabledClassName: 'disabled',
  hrefBuilder: () => String,
  extraAriaContext: '',
  style: {},
  className: '',
};

export default Pagination;
