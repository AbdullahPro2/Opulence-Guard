import Logo from '../assets/Logo.svg';
import UserImg from '../assets/user.png';
import MenuIcon from '../assets/MenuIcon.png';
import CrossIcon from '../assets/CrossIcon.png';
import { useState } from 'react';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative flex items-center justify-between bg-yellow-400 px-2 py-1 ">
      <div>
        <img src={UserImg} alt="User image" />
        <h3>UserName</h3>
      </div>
      <img src={Logo} alt="Main Logo" className="w-40 " />
      <div>
        {!isOpen ? (
          <img
            src={MenuIcon}
            alt="icons"
            className="absolute right-0 top-[35%] z-10 w-10 cursor-pointer xl:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        ) : (
          <img
            src={CrossIcon}
            alt="icons"
            className=" absolute right-0 top-[40%] z-10 w-10 cursor-pointer xl:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        )}
        <ul
          className={`absolute right-0 top-0 flex h-screen w-[0px] flex-col items-center justify-center gap-12   bg-yellow-500 transition-all duration-300  xl:top-[40%]  xl:w-auto xl:flex-row xl:items-start xl:justify-end xl:gap-12  xl:bg-transparent xl:px-2 xl:text-lg ${
            isOpen ? 'w-1/2 ' : ''
          } `}
        >
          <li className={`xl:inline ${isOpen ? 'inline' : 'hidden'}`}>Home</li>
          <li className={`xl:inline ${isOpen ? 'inline' : 'hidden'}`}>
            Accounts
          </li>
          <li className={`xl:inline ${isOpen ? 'inline' : 'hidden'}`}>
            About us
          </li>
          <li className={`xl:inline ${isOpen ? 'inline' : 'hidden'}`}>
            Products
          </li>
          <li className={`xl:inline ${isOpen ? 'inline' : 'hidden'}`}>
            Contact us
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
