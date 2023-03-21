import React from 'react';
import { CgClose } from 'react-icons/cg';
import { useStateContext } from '../../context/StateContext';
import { Link } from 'react-router-dom';
import GenreLink from './Menu/GenreLink';

const Menu = () => {
  const { closeMenu } = useStateContext();
  return (
    <>
      <div className="menu-component flex flex-col gap-16">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-black md:text-2xl">Menu</h4>
          <CgClose
            onClick={closeMenu}
            className="cursor-pointer pr-2 text-3xl md:hidden"
          />
        </div>
        <div className="links flex flex-col gap-8 font-medium">
          <div className="main-links w-full flex flex-col self-start items-start gap-3 pr-2">
            <Link to={'/home'} className="w-full">
              <button className="text-start">Home</button>
            </Link>
            <Link to={'/personal'} className="w-full">
              <button className="flex items-center gap-2">
                Personal space
              </button>
            </Link>
          </div>
          <div className="">
              <GenreLink />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
