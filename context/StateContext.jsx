import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [games, setGames] = useState([]);

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

  // !! API Data fetching
  const urlGames = `https://api.rawg.io/api/games?key=${
    import.meta.env.VITE_RAWG_API_KEY
  }`;

  const getData = () => {
    axios
      .get(urlGames)
      .then((result) => {
        const response = result.data;
        setGames(response.results);
        console.log(response.results);
      })
      .catch((err) => {
        console.log(err);
      });
    // !! API Data fetching
  };

  return (
    <Context.Provider
      value={{
        getData,
        games,
        darkMode,
        lightMode,
        openMenu,
        closeMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
