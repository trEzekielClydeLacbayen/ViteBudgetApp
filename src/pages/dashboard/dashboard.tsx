import React from 'react';
import { Table, IData } from './table/table';
import { Spendingprogress } from './spendingprogress/spendingprogress';

export default function Dashboard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Spendingprogress data={data} />
      <Table data={data} />
    </div>
  );
}
