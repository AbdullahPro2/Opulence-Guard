import Logo from '../assets/Logo.svg';
import UserImg from '../assets/user.png';
import MenuIcon from '../assets/MenuIcon.png';
import CrossIcon from '../assets/CrossIcon.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const shouldShowNavbar =
        currentScrollPos < prevScrollPos || currentScrollPos < 100;

      if (isOpen && !shouldShowNavbar) {
        setIsOpen(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, prevScrollPos]);
  return (
    <header className="relative flex items-center justify-between bg-yellow-400 px-2 py-1 ">
      <div className="flex flex-col items-center justify-center text-center text-xs md:text-sm xl:text-lg">
        <img src={UserImg} alt="User image" className="w-8" />
        <Link to="/registration">
          <h3>UserName</h3>
        </Link>
      </div>
      <img src={Logo} alt="Main Logo" className="w-24 md:w-32 lg:w-40 " />
      <div className="w-16">
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
          className={`absolute right-0 top-0 flex h-screen w-[0px] flex-col items-center justify-center gap-16 bg-yellow-500  transition-all duration-300 xl:top-[40%] xl:w-auto xl:flex-row xl:items-start xl:justify-end  xl:gap-8 xl:bg-transparent xl:px-2 xl:text-lg ${
            isOpen ? 'w-[50%] ' : ''
          } `}
        >
          <Link to="/">
            <li className={`xl:inline ${isOpen ? 'inline' : 'hidden'}`}>
              Home
            </li>{' '}
          </Link>

          <Link to="/app">
            <li className={`xl:inline ${isOpen ? 'inline' : 'hidden'}`}>
              Accounts
            </li>
          </Link>
          <Link to="/products">
            <li className={`xl:inline ${isOpen ? 'inline' : 'hidden'}`}>
              Products
            </li>
          </Link>
          <Link to="/about">
            <li className={`xl:inline ${isOpen ? 'inline' : 'hidden'}`}>
              About us
            </li>
          </Link>

          <Link to="/about">
            <li className={`xl:inline ${isOpen ? 'inline' : 'hidden'}`}>
              Contact us
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
