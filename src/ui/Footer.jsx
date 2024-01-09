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
      className="flex flex-col items-center justify-center border bg-yellow-400 p-8 text-sm md:grid md:grid-cols-3 md:grid-rows-[1fr_auto_auto] md:text-base xl:text-lg
    "
    >
      <div className="mb-4 flex flex-col   md:mb-0 md:h-full md:p-5 ">
        <img src={Logo} alt="Logo Image" className="w-52" />
      </div>
      <div className="mb-4 flex w-full list-none items-center justify-center gap-8    md:mb-0 md:h-full md:w-full md:flex-col md:p-5">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Transactions</li>
      </div>
      <ul className="mb-4 flex  w-max gap-8  md:mb-0 md:h-full md:w-full md:flex-col md:items-center md:p-5 md:text-center">
        <li className=" cursor-pointer md:w-max">Design</li>
        <li className=" cursor-pointer md:w-max">Support</li>
        <li className=" cursor-pointer md:w-max">Bussiness</li>
        <li className=" cursor-pointer md:w-max">Privacy policy</li>
      </ul>

      <div className="col-span-3 mb-4 flex items-center justify-center  gap-8    md:mb-0 md:gap-20 md:p-5 ">
        <img
          src={Home}
          alt="Social Links images"
          className="w-9 cursor-pointer"
        />
        <img
          src={Github}
          alt="Social Links images"
          className="w-9 cursor-pointer"
        />
        <img
          src={Linkdin}
          alt="Social Links images"
          className="w-9 cursor-pointer"
        />
        <img
          src={Discord}
          alt="Social Links images"
          className="w-9 cursor-pointer"
        />
        <img
          src={Instagram}
          alt="Social Links images"
          className="w-9 cursor-pointer"
        />
        <img
          src={Facebook}
          alt="Social Links images"
          className="w-9 cursor-pointer"
        />
      </div>
      <p className=" row-start-3 mb-4 w-max   md:mb-0 md:p-5 ">
        Oplence Guard LLC <span className="bold text-lg ">&copy;</span> All copy
        right reserved 2024
      </p>
      <p className="col-span-2  row-start-3 mb-4  font-bold md:mb-0 md:p-5 md:text-right ">
        Made By Abdullah
      </p>
    </footer>
  );
}

export default Footer;
