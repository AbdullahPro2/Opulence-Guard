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
    function handleScroll() {
      const currentScrollPosition = window.scrollY;
      const shouldShowNavbar =
        currentScrollPosition < prevScrollPos || currentScrollPosition < 100;
      if (!shouldShowNavbar && isOpen) {
        setIsOpen(false);
      }
      setPrevScrollPos(currentScrollPosition);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, prevScrollPos]);

  return (
    <header className="relative z-40 flex items-center justify-between bg-yellow-400 px-2 py-1 text-sm md:text-base xl:text-lg">
      <div className=" mt-3 text-center">
        <img
          src={UserImg}
          alt="User"
          className="mx-auto mb-2 w-8 md:w-12 xl:w-16"
        />
        <Link to="/registration">
          <h3>UserName</h3>
        </Link>
      </div>
      <img src={Logo} alt="Main Logo" className="w-28 md:w-32 lg:w-40 " />
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
          className={`absolute right-0 top-0 flex h-screen w-[0px] flex-col items-center justify-center gap-16 bg-yellow-500  transition-all duration-300 xl:top-[40%] xl:h-auto xl:w-auto xl:flex-row xl:items-start xl:justify-end  xl:gap-8 xl:bg-transparent xl:px-2 xl:text-lg ${
            isOpen ? 'w-[50%] ' : ''
          } `}
        >
          <Link to="/">
            <li
              className={`w-80 justify-center  xl:inline   ${
                isOpen ? 'flex' : 'hidden'
              }`}
            >
              Home
            </li>{' '}
          </Link>

          <Link to="/app">
            <li
              className={`w-80 justify-center   xl:inline  ${
                isOpen ? 'flex' : 'hidden'
              }`}
            >
              Accounts
            </li>
          </Link>
          <Link to="/products">
            <li
              className={`w-80 justify-center   xl:inline  ${
                isOpen ? 'flex' : 'hidden'
              }`}
            >
              Products
            </li>
          </Link>
          <Link to="/about">
            <li
              className={`w-80 justify-center  xl:inline   ${
                isOpen ? 'flex' : 'hidden'
              }`}
            >
              About us
            </li>
          </Link>

          <Link to="/about">
            <li
              className={` w-80 justify-center  xl:inline  ${
                isOpen ? 'flex' : 'hidden'
              }`}
            >
              Contact us
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
