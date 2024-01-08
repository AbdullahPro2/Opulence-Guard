import React from 'react';
import Logo from '../assets/Logo.svg';
function Footer() {
  return (
    <footer className=" bg-yellow-400">
      <div>
        <img src={Logo} alt="Logo Image" />
        <p> All copy right reserved 2024 &copy; Oplence Guard LLC</p>
      </div>
      <div>
        <ul>
          <li>Design</li>
          <li>Support</li>
          <li>Bussiness</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div>
        <li>About</li>
        <li>Contact</li>
        <li>Products</li>
        <li>Accounts</li>
        <li>Made By Abdullah</li>
      </div>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
