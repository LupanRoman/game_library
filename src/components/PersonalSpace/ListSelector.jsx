import React, { useEffect } from 'react';
import gameList from '../../../data/gameList';
import { useStateContext } from '../../../context/StateContext';
import { useState } from 'react';

// const fromLocal = JSON.parse(localStorage.getItem('games') || '[]');

const ListSelector = ({ OpenListSelector, game }) => {
  const [listOfGames, setListOfGames] = useState([]);

  useEffect(() => {
    const fromLocal = JSON.parse(localStorage.getItem('games'));
    if (fromLocal) {
      setListOfGames(fromLocal);
    }
  }, [game]);

  // const updateState = () => {
  //   setListOfGames([...listOfGames, { ...game }]);
  // };

  useEffect(() => {
    if (listOfGames == '[]') {
      return;
    } else if (listOfGames.length > 0) {
      localStorage.setItem('games', JSON.stringify(listOfGames));
    }
    console.log(listOfGames);
  }, [listOfGames]);

  const storageHandler = () => {
    OpenListSelector();
  };

  return (
    <>
      <div className="listSelector-component flex flex-col gap-2">
        {gameList.map((list) => (
          <h4
            className="text-lg cursor-pointer active:text-cta"
            onClick={() => {
              setListOfGames([
                ...listOfGames,
                { listType: list.title, ...game },
              ]);
              storageHandler();
            }}
          >
            {list.title}
          </h4>
        ))}
      </div>
    </>
  );
};

export default ListSelector;
