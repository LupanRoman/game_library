import React, { useEffect } from 'react';
import gameList from '../../../data/gameList';
import { useState } from 'react';

const ListSelector = ({ OpenListSelector, game }) => {
  const [listOfGames, setListOfGames] = useState([]);
  const [gameListId, setGameListId] = useState(Number);
  const [gameId, setGameId] = useState();
  // !! if (listType == gameListId && game.id == listOfGames.game.game.id)

  useEffect(() => {
    const fromLocal = JSON.parse(localStorage.getItem('games'));
    if (fromLocal) {
      setListOfGames(fromLocal);
    }
  }, [game]);

  // ** Save to localStorage but only if it's not an empty array

  useEffect(() => {
    if (listOfGames == '[]') {
      return;
    } else if (listOfGames.length > 0) {
      localStorage.setItem('games', JSON.stringify(listOfGames));
    }
    // gameList.map((list) => setGameListId(list.id));
    // console.log(listOfGames);
  }, [listOfGames]);

  return (
    <>
      <div className="listSelector-component flex flex-col gap-2">
        {gameList.map((list) => (
          <h4
            id="button"
            className="text-lg cursor-pointer active:text-cta"
            onClick={() => {
              setGameListId(list.id);
              if (gameListId === list.id && game.id == game.id) {
                return;
              } else {
                setListOfGames([
                  ...listOfGames,
                  { listType: list.id, game: game },
                ]);
              }
              // console.log(game.id);
              OpenListSelector();
              console.log();
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
