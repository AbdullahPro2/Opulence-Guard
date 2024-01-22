import React from 'react';
import { Link } from 'react-router-dom';

function CarouselItem({
  image,
  text_1,
  text_2,
  btn_1,
  btn_2,
  bg1,
  bg2,
  bgBtn,
  btnText,
  textcolor,
}) {
  return (
    <div
      className={`carousel relative grid h-[320px]  grid-cols-[1fr_0.6fr] items-center bg-gradient-to-bl ${bg1} ${bg2}   px-2 md:px-12 lg:h-[500px] lg:px-20`}
    >
      <div className={`${textcolor}`}>
        <div className=" text-sm xs:text-base sm:text-lg lg:w-96 lg:text-2xl ">
          {text_1}
          <br />
        </div>
        <div className=" text-xs xs:text-sm sm:text-base lg:w-96 lg:text-lg">
          {text_2}
        </div>

        <div className="absolute mt-5 flex gap-2 text-[10px] xs:text-sm sm:text-base  lg:text-lg">
          <Link to="/Opulence-Guard/registration">
            <button
              className={`${bgBtn} ${btnText} rounded-md border-2 border-transparent p-1 md:p-2 `}
            >
              {btn_1}
            </button>
          </Link>
          <Link to="/Opulence-Guard/about">
            <button className="rounded-md  border-2  border-black bg-transparent p-1 text-white md:p-2 ">
              {btn_2}
            </button>
          </Link>
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
