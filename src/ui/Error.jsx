import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Error() {
  return (
    <>
      <div className="min-h-screen">
        <Header />

        <div className="my-8 text-center text-black">
          <h2 className="mb-4 text-2xl font-bold">Oops! Wrong Path</h2>
          <p>
            The page you are looking for does not exist. Please check the URL
            and try again. 🚫
          </p>
        </div>
      </div>{' '}
      <Footer />
    </>
  );
}

export default Error;
