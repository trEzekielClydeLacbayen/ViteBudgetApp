import React from 'react';
import { IData } from './table';

interface IHeader {
  label: string;
}

type TableType = {
  slicedData: IData[];
  rowsperpage: number;
};

const headerlist: Array<IHeader> = [
  {
    label: 'Category',
  },
  {
    label: 'Transaction',
  },
  {
    label: 'Price',
  },
  {
    label: 'Actions',
  },
];

const TableComponent: React.FC<TableType> = ({ slicedData, rowsperpage }) => {
  const emptyRows = rowsperpage - slicedData.length;

  return (
    <table className="w-full divide-y divide-gray-200">
      <thead>
        <tr>
          {headerlist.map((header) => {
            return (
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header.label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {slicedData.map((row: IData) => (
          <tr key={row.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{row.category}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{row.transaction}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">₱ {row.price}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
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
  );
};

export default TableComponent;
