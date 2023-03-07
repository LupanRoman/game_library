import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import {
  signInWithPopup,
  GoogleAuthProvider,
  browserSessionPersistence,
  setPersistence,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../auth/firebase';

const Landing = () => {
  // ** Getting the data for the google auth
  const provider = new GoogleAuthProvider();
  // ** useNavigate is used for navigating to /home after the user is signed up
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result) {
        navigate('/home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="landing-component h-screen">
        <nav className="landing-nav flex justify-between h-nav items-center px-5 md:px-24">
          <h1 className="text-2xl font-black">Gamify</h1>
          <button
            onClick={signUp}
            className="text-3xl hover:rotate-180 duration-smooth"
          >
            <FcGoogle />
          </button>
        </nav>
        <div className="flex flex-col gap-36 justify-center items-center text-center pt-32 ">
          <div className="text-5xl md:text-7xl font-black">
            <div className="flex flex-col md:flex-row gap-2">
              <h1>Explore a</h1>
              <h1>whole new</h1>
            </div>
            <h1 className="text-cta pt-10">Universe.</h1>
          </div>
          <button
            className="flex items-center font-medium gap-5 bg-cta px-7 py-5 rounded-lg hover:scale-110 duration-smooth"
            onClick={signUp}
          >
            <FcGoogle className="text-4xl" />
            Log in with google
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
