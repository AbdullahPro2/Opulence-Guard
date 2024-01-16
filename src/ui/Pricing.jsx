import React from 'react';

function Pricing({ heading, services, price, bg, z }) {
  return (
    <div
      className={`${bg} relative mx-2 my-8 flex w-[280px] flex-col items-center  justify-center rounded-lg px-4 py-6 text-yellow-950 shadow-2xl md:h-[700px] md:w-[400px] lg:mx-[-10px] ${z} `}
    >
      <div className="flex flex-col items-center  space-y-2 lg:space-y-4">
        <h1 className="text-lg font-black md:text-xl">{heading}</h1>
        {services.map((service) => (
          <p className="text-sm text-yellow-950 lg:text-base" key={service}>
            {service}
          </p>
        ))}
      </div>
      <div className="mt-auto space-y-6">
        <h2 className="text-xl font-black md:text-2xl">{price}</h2>
        <button className="inline-block w-fit border-2 border-yellow-950 px-8 py-1 hover:scale-110 hover:bg-yellow-950 hover:text-yellow-200">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Pricing;
