import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
