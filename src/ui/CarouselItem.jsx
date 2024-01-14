import React from 'react';

function CarouselItem({ image, text_1, text_2, btn_1, btn_2 }) {
  return (
    <div className="carousel relative grid h-[320px]  grid-cols-[1fr_0.6fr] items-center bg-gradient-to-t from-stone-800 to-yellow-500 px-2 md:px-12 lg:h-[400px] lg:px-20">
      <div className=" ">
        <div className=" text-sm text-yellow-400 xs:text-base sm:text-lg lg:w-96 lg:text-2xl ">
          {text_1}
          <br />
        </div>
        <div className=" text-xs text-yellow-400 xs:text-sm sm:text-base lg:w-96 lg:text-lg">
          {text_2}
        </div>

        <div className="absolute mt-5 flex gap-2 text-[10px] xs:text-sm sm:text-base  lg:text-lg">
          <button className=" rounded-md bg-yellow-400 p-1">{btn_1}</button>
          <button className="rounded-md  border bg-transparent p-1 text-white ">
            {btn_2}
          </button>
        </div>
      </div>
      <img
        src={image}
        alt="Black Cradit Card"
        className={` pointer-events-none mx-auto w-56 lg:w-96`}
      />
    </div>
  );
}

export default CarouselItem;
