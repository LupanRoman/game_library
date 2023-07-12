import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import app from '../../../auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const SignUp = ({ openSignUp, openLogIn }) => {
  const { registerUser } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user] = useAuthState(app);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  return (
    <>
      <div
        id="modal-signUp"
        className="modal-signUp top-20 hidden bg-white rounded-lg px-10 py-14"
      >
        <div className="sign-up-container relative flex flex-col items-start  ">
          <button
            className="absolute -top-10 -right-4 font-medium text-xl"
            onClick={openSignUp}
          >
            X
          </button>
          <h4 className="pb-5 text-xl font-black">Sign up</h4>
          <label htmlFor="email" className="pb-2">
            Email
          </label>
          <input
            id="emailInput"
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
            id="passwordInput"
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
          onClick={() => {
            registerUser(email, password);
            openLogIn();
          }}
        >
          Sign up
        </button>
        <button className="text-sm" onClick={openLogIn}>
          Already have an account? Log in
        </button>
      </div>
    </>
  );
};

export default SignUp;
