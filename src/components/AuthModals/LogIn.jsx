import React, { useState } from 'react';
import { useAuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const LogIn = ({ openSignUp, openLogIn }) => {
  const { logInUser, currentUser } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth()

  const navigate = useNavigate();
  
  return (
    <>
      <div
        id="modal-logIn"
        className="modal-logIn top-20 hidden bg-white rounded-lg px-10 md:px-20 py-14 justify-center"
      >
        <div className="log-in-container relative flex flex-col items-start  ">
          <button
            className="absolute -top-10 -right-4 font-medium text-xl"
            onClick={openLogIn}
          >
            X
          </button>
          <h4 className="pb-5 text-xl font-black">Log in</h4>
          <label htmlFor="email" className="pb-2">
            Email
          </label>
          <input
            id="emailInputLogin"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label htmlFor="email" className="pb-2 pt-4">
            Password
          </label>
          <input
            id="passwordInputLogin"
            type="password"
            name="password"
            placeholder="********"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          className="font-black bg-cta px-2 py-4 rounded-lg hover:scale-110 duration-smooth"
          onClick={async () => {
            logInUser(email, password);
            onAuthStateChanged(auth, (user) => {
              if(user && user.emailVerified == true) {
                navigate('/home')
              } else {
                return 
              }
            })
          }}
        >
          Log in
        </button>
        <button className="text-sm" onClick={openSignUp}>
          Don't have an account yet?
          <br />
          Sign up.
        </button>
      </div>
    </>
  );
};

export default LogIn;
