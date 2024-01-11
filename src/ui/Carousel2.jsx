import React from 'react';
import growth from '../assets/growth.png';
function Carousel2() {
  return (
    <div className="relative grid h-[320px] grid-cols-[1fr_0.6fr] items-center bg-gradient-to-br from-stone-700 to-yellow-500 px-2 md:px-12 lg:h-[400px] lg:px-20">
      <div className=" ">
        <div className=" xs:text-base text-sm text-yellow-400 sm:text-lg lg:w-96 lg:text-2xl">
          Unlocking Financial Freedom, One Click at a Time
          <br />
        </div>
        <div className=" xs:text-sm text-xs text-yellow-400 sm:text-base lg:w-96 lg:text-lg">
          Secure, Seamless, and Simple Banking for the Modern World
        </div>
        <div className=" xs:text-sm text-xs text-yellow-400 sm:text-base lg:w-96 lg:text-lg">
          Join Us Today and Elevate Your Banking Experience
        </div>

        <div className="xs:text-sm absolute mt-5 flex gap-2 text-[10px] sm:text-base  lg:text-lg">
          <button className=" rounded-md bg-yellow-400 p-1">
            Get Started Now
          </button>
          <button className="rounded-md  border bg-transparent p-1 text-white ">
            Explore More
          </button>
        </div>
      </div>
      <img
        src={growth}
        alt="Black Cradit Card"
        className="mx-auto w-56 lg:w-72"
      />
    </div>
  );
}

export default Carousel2;
