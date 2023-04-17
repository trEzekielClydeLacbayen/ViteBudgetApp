import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Menu() {
  const location = useLocation();

  interface NavlinkItem {
    url: string;
    active?: string;
    inactive?: string;
    label: string;
  }

  const navlinks = [
    {
      url: '/',
      label: 'Dashboard',
    },
    {
      url: '/Profile',
      label: 'Profile',
    },
    {
      url: '/Settings',
      label: 'Settings',
      extra: 'WOW',
    },
  ];

  function navlinkrender(item: NavlinkItem) {
    return (
      <li className="mb-2">
        <NavLink
          to={item.url}
          className={
            location.pathname === item.url
              ? item.active || 'block px-3 py-2 rounded-xl bg-blue-900'
              : item.inactive ||
                'block text-gray-400 px-3 py-2 transition duration-200 ease-in-out hover:text-white hover:bg-gray-700 rounded-xl'
          }
        >
          {item.label}
        </NavLink>
      </li>
    );
  }

  return (
    <div className="flex-none bg-gray-800 text-white w-48 p-4">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <ul className="list-none">
        {navlinks.map((item) => navlinkrender(item))}
      </ul>
    </div>
  );
}
