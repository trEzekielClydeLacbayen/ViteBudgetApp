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
  const pageNumbers = [];

  const handlePageClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const handlePrevClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const visiblePages = 3;
    const halfVisible = Math.floor(visiblePages / 2);
    let startPage;
    let endPage;
    let pages = [];

    if (totalPages <= visiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= halfVisible + 1) {
        startPage = 1;
        endPage = visiblePages;
      } else if (currentPage >= totalPages - halfVisible) {
        startPage = totalPages - visiblePages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - halfVisible;
        endPage = currentPage + halfVisible;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (startPage > 1) {
      pages = [1, '...', ...pages.slice(1)];
    }
    if (endPage < totalPages) {
      pages = [...pages.slice(0, -1), '...', totalPages];
    }

    return pages.map((page) => (
      <li
        key={page}
        onClick={() => {
          if (typeof page === 'number') {
            handlePageClick(page);
          }
        }}
        className={`text-sm leading-5 font-medium rounded-full px-3 py-1 mx-1 focus:outline-none focus:bg-blue-100 ${
          typeof page === 'number'
            ? page === currentPage
              ? 'bg-blue-500 text-white'
              : 'text-gray-700 hover:bg-gray-200 hover:cursor-pointer transition-colors duration-200'
            : 'text-gray-500 pointer-events-none'
        }`}
      >
        {page}
      </li>
    ));
  };

  return (
    <div className="flex justify-end items-center py-4 px-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <ul className="flex">{renderPageNumbers()}</ul>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
