import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react';
import auth from '../auth/firebase';

const AuthContextInit = createContext();

export const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const registerUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user);
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
        if (user && user.emailVerified == true) {
          console.log(user);
        } else {
          console.log('no user');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      console.log('no user found in auth state');
    }
  });

  return (
    <AuthContextInit.Provider
      value={{
        registerUser,
        logInUser,
        currentUser,
      }}
    >
      {children}
    </AuthContextInit.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContextInit);
