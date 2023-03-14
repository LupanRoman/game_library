import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../auth/firebase';
import { HiOutlineMenuAlt1, HiMoon, HiSun } from 'react-icons/hi';
import Menu from './Menu';
import TopBanner from './TopBanner';
import MostPlayed from './MostPlayed';
import { useStateContext } from '../../context/StateContext';

const Home = () => {
  const { getData, games, darkMode, lightMode, openMenu, closeMenu } =
    useStateContext();
  const [user, loading] = useAuthState(app);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
    console.log(games);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  });

  return (
    <>
      <div className="home-component px-5 lg:px-20 relative">
        <div className="nav-bar h-nav flex justify-between items-center">
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
        <div className="flex-layout flex gap-10 md:pr-10">
          <div
            id="menu-container"
            className="menu-container absolute top-5 md:static"
          >
            <Menu closeMenu={closeMenu} />
          </div>
          <div className="grid-layout">
            <TopBanner />
            <MostPlayed />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
