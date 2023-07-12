import React from 'react';
import { CgClose } from 'react-icons/cg';
import { useStateContext } from '../../context/StateContext';
import { Link, useNavigate } from 'react-router-dom';
import GenreLink from './Menu/GenreLink';
import { TbDoorExit } from 'react-icons/tb';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const Menu = () => {
  const { handleMenu } = useStateContext();

  // * Logging the user out

  const auth = getAuth();
  const navigate = useNavigate()

  const getOut = () => {
    onAuthStateChanged(auth, (user) => {
      signOut(auth).then(() => {
        console.log('out');
        navigate('/')
      });
    });
  };

  return (
    <>
      <div className="menu-component flex flex-col gap-16 dark:md:bg-dark-menu dark:shadow-xl">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-black md:text-2xl">Menu</h4>
          <CgClose
            onClick={handleMenu}
            className="cursor-pointer pr-2 text-3xl md:hidden"
          />
        </div>
        <div className="links flex flex-col gap-8 font-medium">
          <div className="main-links w-full flex flex-col self-start items-start gap-3 pr-2">
            <Link to={'/home'} className="w-full">
              <button className="text-start dark:bg-dark-link dark:hover:bg-desaturated-cta">
                Home
              </button>
            </Link>
            <Link to={'/personal'} className="w-full">
              <button className="flex items-center gap-2 dark:bg-dark-link dark:hover:bg-desaturated-cta">
                Personal space
              </button>
            </Link>
            <button
              onClick={getOut}
              className="text-left flex items-center gap-2 dark:bg-dark-link dark:hover:bg-desaturated-cta"
            >
              Sign out <TbDoorExit />
            </button>
          </div>
          <div>
            <GenreLink />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
