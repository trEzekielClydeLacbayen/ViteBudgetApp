import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface NavlinkItem {
  url: string;
  active?: string;
  inactive?: string;
  label: string;
}

export default function navlinkitem(item: NavlinkItem) {
  const location = useLocation();
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
