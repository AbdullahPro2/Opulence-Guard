import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="">
      <div className="min-h-screen">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
