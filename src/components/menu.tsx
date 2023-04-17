import React from 'react';
import Navlinkitem from './menunavitem';

interface MenuProps {
  toggleHandler: () => void;
}

export default function Menu({ toggleHandler }: MenuProps) {
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
    <div className="flex-none bg-gray-800 text-white md:w-48 h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <ul className="list-none">
        {navlinks.map((item) => (
          <Navlinkitem
            key={item.label}
            item={item}
            toggleHandler={toggleHandler}
          />
        ))}
      </ul>
    </div>
  );
}
