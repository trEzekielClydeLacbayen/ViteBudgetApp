import React, { useState } from 'react';

interface IData {
  category: string;
  transaction: string;
  price: number;
}

type TableType = {
  data: IData[];
};

export const Spendingprogress: React.FC<TableType> = ({ data }) => {
  const [totalSpending, setTotalSpending] = useState(
    data.reduce((total, item) => total + item.price, 0)
  );
  const [budget, setBudget] = useState(10000);
  const progress = (totalSpending / budget) * 100;
  const progressColor =
    totalSpending >= budget ? 'red' : progress > 70 ? 'yellow' : 'green';
  const progressWidth = progress > 100 ? 100 : progress;
  return (
    <>
      <div className="w-full h-4 bg-gray-200 rounded-full relative  overflow-hidden">
        <div
          className={`h-full bg-${progressColor}-500`}
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-col">
          <span className="text-gray-400 text-sm uppercase">
            Total Spending
          </span>
          <span className="text-gray-900 font-bold text-xl">
            ₱ {totalSpending}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400 text-sm uppercase text-right">
            Budget
          </span>
          <span className="text-gray-900 font-bold text-xl">₱ {budget}</span>
        </div>
      </div>
    </>
  );
};
