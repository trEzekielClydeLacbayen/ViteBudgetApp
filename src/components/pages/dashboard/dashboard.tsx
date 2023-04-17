import React, { useState } from 'react';
import { Table, dataType } from './table/table';

const data: Array<dataType> = [
  { category: 'Grocery', transaction: 'Sale', price: 100 },
  { category: 'Furniture', transaction: 'Purchase', price: 500 },
  { category: 'Electronics', transaction: 'Sale', price: 200 },
  { category: 'Books', transaction: 'Purchase', price: 50 },
  { category: 'Clothing', transaction: 'Sale', price: 150 },
  { category: 'Toys', transaction: 'Purchase', price: 75 },
  { category: 'Jewelry', transaction: 'Sale', price: 300 },
  { category: 'Office Supplies', transaction: 'Purchase', price: 100 },
  { category: 'Home Improvement', transaction: 'Sale', price: 250 },
  { category: 'Sporting Goods', transaction: 'Purchase', price: 125 },
  { category: 'Music', transaction: 'Sale', price: 75 },
  { category: 'Art', transaction: 'Purchase', price: 200 },
  { category: 'Crafts', transaction: 'Sale', price: 50 },
  { category: 'Pet Supplies', transaction: 'Purchase', price: 100 },
  { category: 'Beauty', transaction: 'Sale', price: 150 },
  { category: 'Automotive', transaction: 'Purchase', price: 500 },
  { category: 'Movies', transaction: 'Sale', price: 75 },
  { category: 'Health', transaction: 'Purchase', price: 200 },
  { category: 'Industrial', transaction: 'Sale', price: 250 },
  { category: 'Garden', transaction: 'Purchase', price: 100 },
];

export default function Dashboard() {
  return (
    <div className="">
      <Table data={data} />
    </div>
  );
}
