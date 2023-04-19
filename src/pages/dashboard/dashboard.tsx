import React from 'react';
import { Table, IData } from './table/table';
import { Spendingprogress } from './spendingprogress/spendingprogress';

export default function Dashboard() {
  const data: Array<IData> = [
    {
      id: 1,
      category: 'Food',
      transaction: 'Pizza',
      price: 8.99,
      date: new Date('2022-01-01'),
    },
    {
      id: 2,
      category: 'Transportation',
      transaction: 'Gas',
      price: 30.0,
      date: new Date('2022-01-02'),
    },
    {
      id: 3,
      category: 'Housing',
      transaction: 'Rent',
      price: 800.0,
      date: new Date('2022-01-03'),
    },
    {
      id: 4,
      category: 'Food',
      transaction: 'Groceries',
      price: 50.0,
      date: new Date('2022-01-04'),
    },
    {
      id: 5,
      category: 'Entertainment',
      transaction: 'Movie',
      price: 12.0,
      date: new Date('2022-01-05'),
    },
    {
      id: 6,
      category: 'Transportation',
      transaction: 'Uber',
      price: 15.0,
      date: new Date('2022-01-06'),
    },
    {
      id: 7,
      category: 'Shopping',
      transaction: 'Clothing',
      price: 40.0,
      date: new Date('2022-01-07'),
    },
    {
      id: 8,
      category: 'Food',
      transaction: 'Fast Food',
      price: 7.0,
      date: new Date('2022-01-08'),
    },
    {
      id: 9,
      category: 'Housing',
      transaction: 'Mortgage',
      price: 1500.0,
      date: new Date('2022-01-09'),
    },
    {
      id: 10,
      category: 'Entertainment',
      transaction: 'Concert',
      price: 100.0,
      date: new Date('2022-01-10'),
    },
    {
      id: 11,
      category: 'Transportation',
      transaction: 'Parking',
      price: 5.0,
      date: new Date('2022-01-11'),
    },
    {
      id: 12,
      category: 'Food',
      transaction: 'Dinner',
      price: 25.0,
      date: new Date('2022-01-12'),
    },
    {
      id: 13,
      category: 'Shopping',
      transaction: 'Electronics',
      price: 500.0,
      date: new Date('2022-01-13'),
    },
    {
      id: 14,
      category: 'Housing',
      transaction: 'Utilities',
      price: 100.0,
      date: new Date('2022-01-14'),
    },
    {
      id: 15,
      category: 'Entertainment',
      transaction: 'Game',
      price: 60.0,
      date: new Date('2022-01-15'),
    },
    {
      id: 16,
      category: 'Transportation',
      transaction: 'Taxi',
      price: 20.0,
      date: new Date('2022-01-16'),
    },
    {
      id: 17,
      category: 'Food',
      transaction: 'Lunch',
      price: 12.0,
      date: new Date('2022-01-17'),
    },
    {
      id: 18,
      category: 'Shopping',
      transaction: 'Groceries',
      price: 30.0,
      date: new Date('2022-01-18'),
    },
    {
      id: 19,
      category: 'Housing',
      transaction: 'Maintenance',
      price: 50.0,
      date: new Date('2022-01-19'),
    },
  ];
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Spendingprogress data={data} />
      <Table data={data} />
    </div>
  );
}
