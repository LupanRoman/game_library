import React from 'react';
import { CgClose } from 'react-icons/cg';
import { BsFire } from 'react-icons/bs';

const Menu = ({ closeMenu }) => {
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
            <button className="text-start">Home</button>
            <button className="flex items-center gap-2">Personal space</button>
          </div>
          <div className="">
            <ul className="genres-filter flex flex-col gap-3 pr-2">
              <li>Action</li>
              <li>Adventure</li>
              <li>Arcade</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
