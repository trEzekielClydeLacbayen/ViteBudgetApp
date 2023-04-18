import React, { useState, useRef, useEffect } from 'react';

type TableHeaderType = {
  searchTerm: string;
  handleSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddCategory: () => void;
  handleAddTransaction: () => void;
};

export const TableHeader: React.FC<TableHeaderType> = ({
  searchTerm,
  handleSearchTermChange,
  handleAddCategory,
  handleAddTransaction,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const handleHamburgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (handler: () => void) => {
    setIsMenuOpen(false);
    handler();
  };

  return (
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
            <span>Category</span>
          </button>
        </div>
        <div className="hidden md:flex px-1">
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={handleAddTransaction}
          >
            <span>Transaction</span>
          </button>
        </div>
        <div className="relative">
          <div className="flex md:hidden">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded"
              onClick={handleHamburgerMenu}
            >
              Add
            </button>
          </div>
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute top-10 right-0 z-10 bg-white border border-black rounded-md shadow-lg md:w-full"
            >
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-200 hover:rounded-md"
                onClick={() => handleMenuItemClick(handleAddCategory)}
              >
                Category
              </button>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-200 hover:rounded-md"
                onClick={() => handleMenuItemClick(handleAddTransaction)}
              >
                Transaction
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
