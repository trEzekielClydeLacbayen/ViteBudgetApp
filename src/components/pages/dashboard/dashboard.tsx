import React from 'react';
import Menu from '../../menu';

export default function Dashboard() {
  return (
    <div className="flex flex-row h-screen">
      {/* Menu column */}
      <Menu />
      {/* Content column */}
      <div className="flex-1 bg-white p-4">Content</div>
    </div>
  );
}
