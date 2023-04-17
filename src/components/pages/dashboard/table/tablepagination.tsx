import React from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          onClick={() => handlePageClick(i)}
          className={i === currentPage ? 'active' : ''}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <ul className="pagination-list">{renderPageNumbers()}</ul>
    </div>
  );
};

export default Pagination;
