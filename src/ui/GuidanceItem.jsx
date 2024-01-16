import React from 'react';

function GuidanceItem({ image, heading, para, btnText }) {
  return (
    <div className="mx-auto my-8 flex flex-col rounded-xl  shadow-2xl  md:h-[500px] md:w-1/3">
      <img
        src={image}
        alt="Guiandce"
        className="rounded-t-xl lg:max-w-[600px]"
      />
      <div className="flex flex-grow flex-col px-2">
        <h1 className="mb-5 text-lg font-medium md:text-lg md:font-semibold lg:text-xl xl:text-2xl">
          {heading}
        </h1>
        <p className="mb-5  text-base md:text-base lg:text-lg ">{para}</p>
        <button className=" md:text-base= mb-5 mt-auto rounded-xl border-2 border-black px-2 py-1 text-sm hover:bg-black hover:text-white lg:w-3/4 lg:text-xl">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default GuidanceItem;
