// @flow
import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

import PaginationWrapper from './PaginationWrapper';

type Props = {
  pageCount: number,
  currentPage: number,
  pageRangeDisplayed: number,
  marginPagesDisplayed: number,
  previousLabel: string,
  nextLabel: string,
  breakLabel: string,
  onPageChange: (data: { selected: number }) => any,
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
  hrefBuilder?: () => string,
  extraAriaContext?: string,
  style?: Object,
  className?: string,
};

const PaginationPositioning = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
`;

const Pagination = ({ style, className, ...rest }: Props) => (
  <PaginationPositioning>
    <PaginationWrapper style={style} className={className}>
      <ReactPaginate {...rest} />
    </PaginationWrapper>
  </PaginationPositioning>
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
