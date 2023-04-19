import React, { useState } from 'react';

import TableComponent from './tablecomponent';
import TableHeader from './tableheadercomponent';
import TransactionForm from '../forms/transactionform';
import Pagination from './tablepagination';

export interface IData {
  id: number;
  category: string;
  transaction: string;
  price: number;
  date?: Date;
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
    setPage(1);
  };

  const handleAddCategory = () => {};

  const [TransactionFormVisible, setTransactionFormVisible] = useState(false);
  const handleAddTransaction = () => {
    setTransactionFormVisible(true);
  };

  const AddTransaction: React.FC<IData> = (parameters) => {
    data.push(parameters);
    return null;
  };

  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const filteredData = data.filter(
    (row) =>
      row.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.transaction.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const slicedData: Array<IData> = filteredData.slice(start, end);
  console.log(slicedData);
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-gray-50">
            <TableHeader
              searchTerm={searchTerm}
              handleSearchTermChange={handleSearchTermChange}
              handleAddCategory={handleAddCategory}
              handleAddTransaction={handleAddTransaction}
            />
            <TableComponent slicedData={slicedData} rowsperpage={rowsPerPage} />
            <TransactionForm
              showModal={TransactionFormVisible}
              setShowModal={setTransactionFormVisible}
              addTransaction={AddTransaction}
            />
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
