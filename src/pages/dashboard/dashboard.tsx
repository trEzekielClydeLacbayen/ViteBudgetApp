import React from 'react';
import { Table, IData } from './table/table';
import { Spendingprogress } from './spendingprogress/spendingprogress';

const data: Array<IData> = [
  { category: 'Grocery', transaction: 'Sale', price: 100, date: new Date() },
  { category: 'Furniture', transaction: 'Purchase', price: 500, date: new Date() },
  { category: 'Electronics', transaction: 'Sale', price: 200, date: new Date() },
  { category: 'Books', transaction: 'Purchase', price: 50, date: new Date() },
  { category: 'Clothing', transaction: 'Sale', price: 150, date: new Date() },
  { category: 'Toys', transaction: 'Purchase', price: 75, date: new Date() },
  { category: 'Jewelry', transaction: 'Sale', price: 300, date: new Date() },
  { category: 'Office Supplies', transaction: 'Purchase', price: 100, date: new Date() },
  { category: 'Home Improvement', transaction: 'Sale', price: 250, date: new Date() },
  { category: 'Sporting Goods', transaction: 'Purchase', price: 125, date: new Date() },
  { category: 'Music', transaction: 'Sale', price: 75, date: new Date() },
  { category: 'Art', transaction: 'Purchase', price: 200, date: new Date() },
  { category: 'Crafts', transaction: 'Sale', price: 50, date: new Date() },
  { category: 'Pet Supplies', transaction: 'Purchase', price: 100, date: new Date() },
  { category: 'Beauty', transaction: 'Sale', price: 150, date: new Date() },
  { category: 'Automotive', transaction: 'Purchase', price: 500, date: new Date() },
  { category: 'Movies', transaction: 'Sale', price: 75, date: new Date() },
  { category: 'Health', transaction: 'Purchase', price: 200, date: new Date() },
  { category: 'Industrial', transaction: 'Sale', price: 250, date: new Date() },
  { category: 'Garden', transaction: 'Purchase', price: 100, date: new Date() },
  { category: 'Grocery', transaction: 'Sale', price: 100, date: new Date() },
  { category: 'Furniture', transaction: 'Purchase', price: 500, date: new Date() },
  { category: 'Electronics', transaction: 'Sale', price: 200, date: new Date() },
  { category: 'Books', transaction: 'Purchase', price: 50, date: new Date() },
];

export default function Dashboard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Spendingprogress data={data} />
      <Table data={data} />
    </div>
  );
}
