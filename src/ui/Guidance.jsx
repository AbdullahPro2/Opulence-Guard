import React from 'react';
import GuidanceItem from './GuidanceItem';
import retire from '../assets/retire.png';
import homeBuying from '../assets/homeBuying.png';
import purchases from '../assets/smartPurchases.png';

function Guidance() {
  return (
    <div className="my-16 ">
      <h1
        className="px-5 text-center text-lg font-semibold md:flex-row lg:px-12 lg:text-3xl xl:font-bold
      "
      >
        Financial guidance and support
      </h1>
      <div className=" flex flex-col px-5 md:flex-row md:gap-3 lg:px-12">
        <GuidanceItem
          image={retire}
          heading="Save. Invest. Retire well."
          para="Discover how to start saving to meet your retirement goals"
          btnText="Get ready for retirement"
        />
        <GuidanceItem
          image={homeBuying}
          heading="Plan. Prepare. Enjoy home."
          para="Discover tools and tips to help make buying or refinancing a little easier"
          btnText="Get tips for homebuying"
        />
        <GuidanceItem
          image={purchases}
          heading="Dream big. Make it happen. Live it up."
          para="Discover how smart saving habits could help make your dream purchases a reality"
          btnText="Tips for big purchases"
        />
      </div>
    </div>
  );
}

export default Guidance;
