import React from 'react';
import PattenItem from './PattenItem';
import EasyOpen from '../assets/EasyOpen.png';
import EasyTransfer from '../assets/EasyTransaction.png';
import Safe from '../assets/SafeSecure.png';
import Service from '../assets/Service.png';

function ZPattern() {
  return (
    <div className="mb-10 mt-16 ">
      <h1
        className="px-5 text-center text-lg font-semibold md:flex-row lg:px-12 lg:text-3xl xl:font-bold
      "
      >
        Serving To Enjoy
      </h1>
      <div>
        <PattenItem
          image={EasyOpen}
          para="Embark on your financial journey effortlessly with Opulence Guard's intuitive and secure registration process. Dive into the realm of luxury banking in just a few clicks"
          heading="Seamless Onboarding"
          imgOrder={false}
        />
        <PattenItem
          image={EasyTransfer}
          para="Navigate the corridors of convenience with Opulence Guard. Our user-friendly online banking platform ensures your financial activities flow smoothly, bringing opulence to every transaction."
          heading="Effortless Transactions"
          imgOrder={true}
        />

        <PattenItem
          image={Service}
          para="Indulge in opulent care with Opulence Guard's dedicated customer service team. Experience the epitome of personalized assistance as we cater to your financial needs with flair."
          heading="Your Financial Concierge"
          imgOrder={false}
        />
        <PattenItem
          image={Safe}
          para="At Opulence Guard, we fortify your financial world. Our cutting-edge security measures ensure that your wealth is safeguarded, providing a sanctuary for your assets."
          heading="Fortified Security is Assured"
          imgOrder={true}
        />
      </div>
    </div>
  );
}

export default ZPattern;
