import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../auth/firebase';
import { useStateContext } from '../../context/StateContext';
import { HiOutlineMenuAlt1, HiMoon, HiSun } from 'react-icons/hi';

const TopBar = () => {
  const [user, loading] = useAuthState(app);
  const { darkMode, lightMode, openMenu } = useStateContext();

  return (
    <>
      <div className="nav-bar h-nav flex justify-between items-center md:px-4">
        <div className="flex gap-5 items-center text-xl">
          <HiOutlineMenuAlt1
            onClick={openMenu}
            className="cursor-pointer hover:text-cta md:hidden"
          />
          <h1 className="font-black md:text-3xl">Gamify</h1>
        </div>
        <div className="flex items-center gap-5">
          <HiMoon
            onClick={darkMode}
            className="flex dark:hidden hover:text-cta cursor-pointer"
          />
          <HiSun
            onClick={lightMode}
            className="hidden dark:flex hover:text-cta cursor-pointer"
          />
          {user ? (
            <img
              src={user.photoURL}
              width={40}
              alt="profile image"
              className="rounded-full"
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TopBar;
