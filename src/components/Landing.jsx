import React, { useState } from 'react';
import SignUp from './AuthModals/SignUp';
import LogIn from './AuthModals/LogIn';
import { useEffect } from 'react';

const Landing = () => {
  const [modalSignUp, setModalSignUp] = useState(Object);
  const [modalLogIn, setModalLogIn] = useState(Object);

  useEffect(() => {
    const modalSignUp = document.getElementById('modal-signUp');
    const modalLogIn = document.getElementById('modal-logIn');
    setModalSignUp(modalSignUp);
    setModalLogIn(modalLogIn);
  }, []);

  // TODO optimize how modals are opened and closed

  const openSignUp = () => {
    const mainBtn = document.getElementById('main-btn');
    modalSignUp.classList.toggle('active');
    if (modalLogIn.classList.contains('active')) {
      modalLogIn.classList.toggle('active');
    }
    if (modalSignUp.classList.contains('active')) {
      mainBtn.style.display = 'none';
    } else {
      mainBtn.style.display = 'flex';
    }
  };

  // TODO optimize how modals are opened and closed

  const openLogIn = () => {
    const mainBtn = document.getElementById('main-btn');
    modalLogIn.classList.toggle('active');
    if (modalSignUp.classList.contains('active')) {
      modalSignUp.classList.toggle('active');
    }
    if (modalSignUp.classList.contains('active')) {
      mainBtn.style.display = 'none';
    } else {
      mainBtn.style.display = 'flex';
    }
  };

  return (
    <>
      <div className="landing-component h-screen">
        <nav className="landing-nav flex justify-between h-nav items-center px-5 md:px-24">
          <h1 className="text-2xl font-black">Gamify</h1>
        </nav>
        <div className="relative flex flex-col gap-36 justify-center items-center text-center pt-32 ">
          <div className="text-5xl md:text-7xl font-black">
            <div className="flex flex-col md:flex-row gap-2">
              <h1>Explore a</h1>
              <h1>whole new</h1>
            </div>
            <h1 className="text-cta pt-4">Universe.</h1>
          </div>
          <div className="absolute top-10">
            {<SignUp openSignUp={openSignUp} openLogIn={openLogIn} />}
            {<LogIn openSignUp={openSignUp} openLogIn={openLogIn} />}
          </div>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={openLogIn}
              id="main-btn"
              className="font-black gap-5 bg-cta px-7 py-5 rounded-lg"
            >
              Log In
            </button>
            <button onClick={openSignUp}>
              New here ? <span className='text-cta font-black'>Sign up</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
