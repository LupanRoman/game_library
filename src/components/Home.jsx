import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../auth/firebase';
import { HiOutlineMenuAlt1, HiMoon, HiSun } from 'react-icons/hi';
import Menu from './Menu';

const Home = () => {
  const [user, loading] = useAuthState(app);
  const navigate = useNavigate();
  // console.log(user);
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  });

  const darkMode = () => {
    const baseElement = document.documentElement;
    baseElement.classList.toggle('dark');
  };

  const lightMode = () => {
    const baseElement = document.documentElement;
    baseElement.classList.remove('dark');
  };

  const openMenu = () => {
    const menu = document.getElementById('menu-container');
    menu.classList.toggle('active');
  };

  const closeMenu = () => {
    const menu = document.getElementById('menu-container');
    menu.classList.remove('active');
  };

  return (
    <>
      <div className="home-component px-5 relative">
        <div className="nav-bar h-nav flex justify-between items-center">
          <div className="flex gap-5 items-center text-xl">
            <HiOutlineMenuAlt1
              onClick={openMenu}
              className="cursor-pointer hover:text-cta"
            />
            <h1 className="font-black">Gamify</h1>
          </div>
          <div className="flex items-center gap-5">
            <HiMoon
              onClick={darkMode}
              className="flex dark:hidden hover:text-cta"
            />
            <HiSun
              onClick={lightMode}
              className="hidden dark:flex hover:text-cta"
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
        <div id="menu-container" className="menu-container absolute top-5">
          <Menu closeMenu={closeMenu} />
        </div>
      </div>
    </>
  );
};

export default Home;
