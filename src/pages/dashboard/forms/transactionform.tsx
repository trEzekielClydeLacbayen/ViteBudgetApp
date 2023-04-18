import React, { useState } from 'react';

interface ITransactionForm {
  category: string;
  transaction: string;
  price: number;
}

interface IProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  addTransaction: (transaction: ITransactionForm) => void;
}

const TransactionModal: React.FC<IProps> = ({
  showModal,
  setShowModal,
  addTransaction,
}) => {
  const [transaction, setTransaction] = useState<ITransactionForm>({
    category: '',
    transaction: '',
    price: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTransaction((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTransaction(transaction);
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mb-4">
                    <label
                      htmlFor="category"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      id="category"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Category"
                      value={transaction.category}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="transaction"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Transaction
                    </label>
                    <select
                      name="transaction"
                      id="transaction"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={transaction.transaction}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">-- Select Transaction --</option>
                      <option value="Sale">Sale</option>
                      <option value="Purchase">Purchase</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="price"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight                     focus:outline-none focus:shadow-outline"
                      placeholder="Enter price"
                      value={transaction.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TransactionModal;
