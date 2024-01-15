import Aos from 'aos';
import React from 'react';

function PattenItem({ heading, para, image, imgOrder }) {
  Aos.init();
  Aos.refresh();
  return (
    <div className="mb-16 mt-16 flex flex-col px-5 md:flex-row lg:px-12 ">
      <div className={`${imgOrder ? 'md:order-2' : ''} md:w-1/2`}>
        <h1 className="mb-2 text-base font-medium md:text-lg md:font-semibold lg:text-xl xl:text-2xl">
          {heading}
        </h1>
        <p className="mb-2 text-justify text-sm md:text-base lg:text-lg ">
          {para}
        </p>
      </div>
      {imgOrder && (
        <img
          data-aos="fade-right"
          data-aos-duration="1000"
          src={image}
          alt="Z patterns"
          className="mx-auto w-64 lg:w-72 xl:w-80"
        />
      )}
      {!imgOrder && (
        <img
          data-aos="fade-left"
          data-aos-duration="1000"
          src={image}
          alt="Z patterns"
          className="mx-auto w-64 lg:w-72 xl:w-80"
        />
      )}
    </div>
  );
}

export default PattenItem;
