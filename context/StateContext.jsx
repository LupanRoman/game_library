import React, { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const lightDarkMode = () => {
    const baseElement = document.documentElement;
    baseElement.classList.toggle('dark');
  };

  const handleMenu = () => {
    const menu = document.getElementById('menu-container');
    menu.classList.toggle('active');
  };

  return (
    <Context.Provider
      value={{
        lightDarkMode,
        handleMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
