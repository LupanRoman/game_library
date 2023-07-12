import React from 'react';
import { useStateContext } from '../../context/StateContext';
import { HiOutlineMenuAlt1, HiMoon, HiSun } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const { lightDarkMode, handleMenu } = useStateContext();

  return (
    <>
      <div className="nav-bar h-nav flex justify-between items-center md:px-4">
        <div className="flex gap-5 items-center text-xl">
          <HiOutlineMenuAlt1
            onClick={handleMenu}
            className="cursor-pointer hover:text-cta md:hidden"
          />
          <Link to={'/home'} className="font-black md:text-3xl">
            Gamify
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <HiMoon
            onClick={lightDarkMode}
            className="flex dark:hidden hover:text-cta cursor-pointer"
          />
          <HiSun
            onClick={lightDarkMode}
            className="hidden dark:flex hover:text-cta cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default TopBar;
