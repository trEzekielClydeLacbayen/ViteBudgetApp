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

  const handlePrevClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          onClick={() => handlePageClick(i)}
          className={`text-sm leading-5 font-medium rounded-full px-3 py-1 mx-1 focus:outline-none focus:bg-blue-100 ${
            i === currentPage
              ? 'bg-blue-500 text-white'
              : 'text-gray-700 hover:bg-gray-200 hover:cursor-pointer transition-colors duration-200'
          }`}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
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
