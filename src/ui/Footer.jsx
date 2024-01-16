import React from 'react';
import Logo from '../assets/Logo.svg';
import Github from '../assets/github.svg';
import Facebook from '../assets/facebook.svg';
import Discord from '../assets/discord.svg';
import Home from '../assets/home.svg';
import Instagram from '../assets/Instagram_1_.svg';
import Linkdin from '../assets/linkedin.svg';
function Footer() {
  return (
    <footer
      className="flex flex-col items-center justify-center  bg-yellow-400 p-8 text-sm md:grid md:grid-cols-3 md:grid-rows-[1fr_auto_auto] md:text-base xl:text-lg
    "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="mb-4 flex flex-col   md:mb-0 md:h-full md:p-5 ">
        <img src={Logo} alt="Logo" className="w-40 lg:w-64" />
      </div>
      <div className=" mb-4 flex w-full list-none items-center justify-center gap-2 text-sm md:mb-0    md:h-full md:w-full md:flex-col md:gap-8 md:p-5 md:text-base lg:text-lg ">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Transactions</li>
      </div>
      <ul className="mb-4 flex w-max gap-2 text-sm md:mb-0 md:h-full md:w-full md:flex-col md:items-center md:gap-8 md:p-5 md:text-center md:text-base lg:text-lg ">
        <li className=" cursor-pointer md:w-max">Design</li>
        <li className=" cursor-pointer md:w-max">Support</li>
        <li className=" cursor-pointer md:w-max">Bussiness</li>
        <li className=" cursor-pointer md:w-max">Privacy policy</li>
      </ul>

      <div className="col-span-3 mb-4 flex items-center justify-center  gap-8    md:mb-0 md:gap-20 md:p-5 ">
        <img
          src={Home}
          alt="Social Links images"
          className="w-5 cursor-pointer md:w-9"
        />
        <img
          src={Github}
          alt="Social Links images"
          className="w-5 cursor-pointer md:w-9"
        />
        <img
          src={Linkdin}
          alt="Social Links images"
          className="w-5 cursor-pointer md:w-9"
        />
        <img
          src={Discord}
          alt="Social Links images"
          className="w-5 cursor-pointer md:w-9"
        />
        <img
          src={Instagram}
          alt="Social Links images"
          className="w-5 cursor-pointer md:w-9"
        />
        <img
          src={Facebook}
          alt="Social Links images"
          className="w-5 cursor-pointer md:w-9"
        />
      </div>
      <p className="row-start-3 mb-4 text-center text-xs md:mb-0   md:w-max md:p-5 md:text-base lg:text-lg ">
        Oplence Guard LLC <span className="bold text-lg ">&copy;</span> All copy
        right reserved 2024
      </p>
      <p className="col-span-2  row-start-3 mb-4  font-bold md:mb-0 md:p-5 md:text-right md:text-base lg:text-lg  ">
        Made By Abdullah
      </p>
    </footer>
  );
}

export default Footer;
