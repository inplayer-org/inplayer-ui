import React, { useState, useEffect } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { PageBox, PaginationContainer, getBoxStyles } from './styled';

type Props = {
  onPageChange: (pageNumber: number) => void;
  totalItems: number;
  startPage?: number;
  numberOfPagesDisplayed?: number;
  itemsPerPage?: number;
};

// Kibana has limit of 9990 pages
const pagesLimit = 9990;

const Pagination = ({
  onPageChange,
  numberOfPagesDisplayed = 5,
  totalItems,
  startPage = 1,
  itemsPerPage = 15,
}: Props) => {
  const [activePage, setActivePage] = useState(startPage);
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  let totalPages = Math.ceil(totalItems / itemsPerPage);
  totalPages = Math.min(totalPages, pagesLimit);
  const numberOfPagesDisplayedScaled =
    totalPages < numberOfPagesDisplayed ? totalPages : numberOfPagesDisplayed;
  const isVisibleLess = !visiblePages.some((index) => index === 1);
  const isVisibleMore = !visiblePages.some((index) => index === totalPages);

  useEffect(() => {
    let minVisiblePage = 0;
    // this won't work if user wants to show less than 3 pages
    if (startPage + 1 >= totalPages) {
      minVisiblePage = totalPages - numberOfPagesDisplayedScaled + 1;
    } else if (startPage - 1 <= 1) {
      minVisiblePage = 1;
    } else minVisiblePage = startPage - 1;

    // Create the pages that are visible for selection
    const initialPagesVisible = Array.from(Array(numberOfPagesDisplayedScaled).keys()).map(
      (i) => i + minVisiblePage
    );

    setVisiblePages(initialPagesVisible);
  }, [totalItems, itemsPerPage, numberOfPagesDisplayed]);

  useEffect(() => {
    setActivePage(startPage);
  }, [startPage]);

  const onPageClick = (pageNumber: number) => () => {
    const indexOfPage = visiblePages.indexOf(pageNumber);
    let offset = 0;
    if (indexOfPage === 0 && isVisibleLess) {
      offset = -1;
    } else if (indexOfPage === numberOfPagesDisplayedScaled - 1 && isVisibleMore) {
      offset = 1;
    }

    if (offset !== 0) {
      setVisiblePages((pages) => pages.map((page) => page + offset));
    }
    setActivePage(pageNumber);
    onPageChange(pageNumber);
  };

  const onDotsClick = (more: boolean) => () => {
    let offset = 0;
    const deduction = numberOfPagesDisplayedScaled === 3 ? 2 : 3;
    if (!more) {
      if (visiblePages[0] - deduction >= 1) {
        offset = 0 - deduction;
      } else offset = 3 - visiblePages[0] - 2;
      setActivePage(visiblePages[0] - 1);
      onPageChange(visiblePages[0] - 1);
    } else {
      if (visiblePages[numberOfPagesDisplayedScaled - 1] + deduction <= totalPages) {
        offset = deduction;
      } else {
        offset = totalPages - visiblePages[numberOfPagesDisplayedScaled - 1];
      }
      setActivePage(visiblePages[numberOfPagesDisplayedScaled - 1] + 1);
      onPageChange(visiblePages[numberOfPagesDisplayedScaled - 1] + 1);
    }

    setVisiblePages((pages) => pages.map((page) => page + offset));
  };

  const goToEnd = () => {
    setActivePage(totalPages);
    const endPages = Array.from(
      Array(Math.min(Math.ceil(totalItems / itemsPerPage), numberOfPagesDisplayedScaled)).keys()
    )
      .map((number) => totalPages - number)
      .reverse();
    setVisiblePages(endPages);
    onPageChange(totalPages);
  };

  const goToStart = () => {
    setActivePage(1);
    const startPages = Array.from(
      Array(Math.min(Math.ceil(totalItems / itemsPerPage), numberOfPagesDisplayedScaled)).keys()
    ).map((number) => number + 1);
    setVisiblePages(startPages);
    onPageChange(1);
  };

  if (totalItems === 0) {
    return null;
  }

  return (
    <PaginationContainer>
      <PageBox type="button" disabled={activePage === 1} onClick={goToStart}>
        <FaAngleDoubleLeft />
      </PageBox>
      <PageBox type="button" disabled={activePage === 1} onClick={onPageClick(activePage - 1)}>
        <FaAngleLeft />
      </PageBox>
      {!visiblePages.some((index) => index === 1) && (
        <PageBox type="button" hideBorder onClick={onDotsClick(false)}>
          •••
        </PageBox>
      )}
      {visiblePages.map((index) => (
        <PageBox
          type="button"
          selected={activePage === index}
          key={index}
          onClick={onPageClick(index)}
        >
          {index}
        </PageBox>
      ))}
      {!visiblePages.some((index) => index === totalPages) && (
        <PageBox type="button" hideBorder onClick={onDotsClick(true)}>
          •••
        </PageBox>
      )}
      <PageBox
        type="button"
        disabled={activePage === totalPages}
        onClick={onPageClick(activePage + 1)}
      >
        <FaAngleRight />
      </PageBox>
      <PageBox type="button" disabled={activePage === totalPages} onClick={goToEnd}>
        <FaAngleDoubleRight />
      </PageBox>
    </PaginationContainer>
  );
};

Pagination.defaultProps = {
  startPage: 1,
  numberOfPagesDisplayed: 5,
  itemsPerPage: 15,
};

export default Pagination;
