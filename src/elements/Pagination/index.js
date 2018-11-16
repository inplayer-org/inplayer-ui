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
  onPageChange: () => number,
  style?: Object,
  className?: string,
};

const Pagination = ({
  pageCount,
  currentPage,
  pageRangeDisplayed,
  marginPagesDisplayed,
  previousLabel,
  nextLabel,
  breakLabel,
  breakClassName,
  onPageChange,
  initialPage,
  disableInitialCallback,
  containerClassName,
  pageClassName,
  pageLinkClassName,
  activeClassName,
  activeLinkClassName,
  previousClassName,
  nextClassName,
  previousLinkClassName,
  nextLinkClassName,
  disabledClassName,
  hrefBuilder,
  extraAriaContext,
  style,
  className,
}: Props) => (
  <PaginationWrapper style={style} className={className}>
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      previousLabel={previousLabel}
      nextLabel={nextLabel}
      breakLabel={breakLabel}
      breakClassName={breakClassName}
      forcePage={currentPage}
      initialPage={initialPage}
      disableInitialCallback={disableInitialCallback}
      containerClassName={containerClassName}
      pageClassName={pageClassName}
      onPageChange={onPageChange}
      pageLinkClassName={pageLinkClassName}
      activeClassName={activeClassName}
      activeLinkClassName={activeLinkClassName}
      previousClassName={previousClassName}
      nextClassName={nextClassName}
      previousLinkClassName={previousLinkClassName}
      nextLinkClassName={nextLinkClassName}
      disabledClassName={disabledClassName}
      hrefBuilder={hrefBuilder}
      extraAriaContext={extraAriaContext}
    />
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
