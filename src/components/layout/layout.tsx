import React, { ReactNode } from 'react';
import Footer from '../footer';
import Header from '../header';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="mx-auto flex-1">{children}</main>
      <Footer />
    </div>
  );
}
