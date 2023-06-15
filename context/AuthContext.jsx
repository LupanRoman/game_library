import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { createContext, useContext } from 'react';
import auth from '../auth/firebase';

const AuthContextInit = createContext();

export const AuthContext = ({ children }) => {
  const registerUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user);
        console.log(user);
        if (user.emailVerified == false) {
          alert('An email with email verification link was sent to your email');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logInUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <AuthContextInit.Provider
      value={{
        registerUser,
        logInUser,
      }}
    >
      {children}
    </AuthContextInit.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContextInit);
