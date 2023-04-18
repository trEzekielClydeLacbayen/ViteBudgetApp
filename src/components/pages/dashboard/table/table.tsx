import React, { useState } from 'react';
import TableComponent from './tablecomponent';
import Pagination from './tablepagination';

export interface IData {
  category: string;
  transaction: string;
  price: number;
}

type TableType = {
  data: IData[];
};

export const Table: React.FC<TableType> = ({ data }) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleAddCategory = () => {};

  const handleAddTransaction = () => {};

  const handleHamburgerMenu = () => {};

  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const filteredData = data.filter(
    (row) =>
      row.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.transaction.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const slicedData: Array<IData> = filteredData.slice(start, end);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, filteredData.length - start);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-gray-50">
            <div className="flex justify-between px-4 py-3 sm:px-6">
              <div className="flex">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-black rounded-md px-3 py-1"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchTermChange}
                />
              </div>
              <div className="flex">
                <div className="hidden md:flex px-1 ">
                  <button
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    onClick={handleAddCategory}
                  >
                    <svg
                      className="-ml-1 mr-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 1a9 9 0 100-18 9 9 0 000 18zm-1-9V7a1 1 0 012 0v3h3a1 1 0 010 2h-3v3a1 1 0 01-2 0v-3H6a1 1 0 010-2h3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Category</span>
                  </button>
                </div>
                <div className="hidden md:flex px-1">
                  <button
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    onClick={handleAddTransaction}
                  >
                    <svg
                      className="-ml-1 mr-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 1a9 9 0 100-18 9 9 0 000 18zm-1-9V7a1 1 0 012 0v3h3a1 1 0 010 2h-3v3a1 1 0 01-2 0v-3H6a1 1 0 010-2h3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Transaction</span>
                  </button>
                </div>
                <div className="flex md:hidden">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded"
                    onClick={handleHamburgerMenu}
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <TableComponent slicedData={slicedData} rowsperpage={rowsPerPage} />
            <Pagination
              totalItems={filteredData.length}
              itemsPerPage={rowsPerPage}
              currentPage={page}
              onPageChange={handleChangePage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
