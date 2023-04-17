import React, { ReactNode } from 'react';
import Footer from '../footer';
import Header from '../header';
import Menu from '../menu';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto bg-gray-100 h-screen">
      <Header />
      <main className="flex flex-row h-full">
        <div className="hidden md:block">
          <Menu />
        </div>
        <div className="flex-grow h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
