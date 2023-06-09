import React from 'react';
import gameList from '../../../data/gameList';
import { useStateContext } from '../../../context/StateContext';
import { useState } from 'react';

const ListSelector = ({ OpenListSelector, game }) => {
  const [listOfGames, setListOfGames] = useState([]);

  const addToList = () => {
    console.log(game);
    OpenListSelector();
    setListOfGames([...listOfGames, game]);
    console.log(listOfGames);
  };
  return (
    <>
      <div className="listSelector-component flex flex-col gap-2">
        {gameList.map((list) => (
          <h4
            className="text-lg cursor-pointer active:text-cta"
            onClick={addToList}
          >
            {list.title}
          </h4>
        ))}
      </div>
    </>
  );
};

export default ListSelector;
