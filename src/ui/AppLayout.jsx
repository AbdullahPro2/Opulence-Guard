import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  const location = useLocation();
  document.title = `Opulence Guard | ${
    location.pathname.split('/')[1] !== ''
      ? location.pathname.split('/')[1].charAt(0).toUpperCase() +
        location.pathname.split('/')[1].slice(1)
      : 'Home'
  }`;
  return (
    <div className="bg-yellow-50">
      <div className="min-h-screen">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
