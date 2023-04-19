import React, { useState } from 'react';
import Menu from './menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">My Budget App</h1>
        <button
          className="block md:hidden focus:outline-none"
          onClick={handleMenuToggle}
        >
          <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 6H5V5h14v1zM19 11H5v1h14v-1zM5 17h14v-1H5v1z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v1H4V6zm16 4H4v1h16v-1zm0 4H4v1h16v-1z"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleMenuToggle();
            }
          }}
        >
          <div
            className="bg-gray-800 text-white w-48 p-4 absolute top-0 left-0 h-full z-50"
            style={{
              transition: 'transform 0.3s ease-in-out',
              transform: 'translateX(0)',
            }}
          >
            <Menu toggleHandler={handleMenuToggle} />
          </div>
        </div>
      )}
    </header>
  );
}
