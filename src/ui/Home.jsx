import React from 'react';
import Carousel from './Carousel';
import ZPattern from './ZPattern';
import Guidance from './Guidance';

function Home() {
  return (
    <div>
      <Carousel />
      <div className="mx-auto my-8 w-24 rounded-md border-[3px] border-yellow-500"></div>
      <ZPattern />
      <div className="mx-auto my-8 w-24 rounded-md border-[3px] border-yellow-500"></div>
      <Guidance />
      <div className="mx-auto my-8 w-24 rounded-md border-[3px] border-yellow-500"></div>
    </div>
  );
}

export default Home;
