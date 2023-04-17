import React, { useState } from 'react';
import Pagination from './tablepagination';

export interface dataType {
  category: string;
  transaction: string;
  price: number;
}

interface TableProps {
  data: dataType[];
}

export const Table = ({ data }: TableProps) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const slicedData = data.slice(start, end);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - start);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-gray-50">
            <table className="w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Transaction
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {slicedData.map((row: dataType) => (
                  <tr key={row.category}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {row.category}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {row.transaction}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">₱ {row.price}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}

                {emptyRows > 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 whitespace-nowrap">
                      ...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <Pagination
              totalItems={data.length}
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
