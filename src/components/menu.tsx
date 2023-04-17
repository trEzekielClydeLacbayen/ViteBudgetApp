import React from 'react';
import Navlinkitem from './menunavitem';

export default function Menu() {
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

  return (
    <div className="flex-none bg-gray-800 text-white w-48 p-4">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <ul className="list-none">{navlinks.map((item) => Navlinkitem(item))}</ul>
    </div>
  );
}
