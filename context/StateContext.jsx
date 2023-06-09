import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const Context = createContext();

export const StateContext = ({ children }) => {
  // const [games, setGames] = useState([]);

  const lightDarkMode = () => {
    const baseElement = document.documentElement;
    baseElement.classList.toggle('dark');
  };

  const handleMenu = () => {
    const menu = document.getElementById('menu-container');
    menu.classList.toggle('active');
  };

  // !! API Data fetching for most played games
  // const urlGames = `https://api.rawg.io/api/games?key=${
  //   import.meta.env.VITE_RAWG_API_KEY
  // }&metacritic=90,100`;

  // const getData = () => {
  //   axios
  //     .get(urlGames)
  //     .then((result) => {
  //       const response = result.data;
  //       setGames(response.results);
  //       // console.log(response.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // !! API Data fetching

  // const addGameToList = () => {
  //   listOfGames.push(games);
  // };

  return (
    <Context.Provider
      value={{
        // getData,
        // games,
        lightDarkMode,
        handleMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
