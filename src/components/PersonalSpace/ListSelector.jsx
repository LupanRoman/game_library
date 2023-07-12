import React, { useEffect } from 'react';
import gameList from '../../../data/gameList';
import { useState } from 'react';

const ListSelector = ({ OpenListSelector, game, GameId }) => {
  const [listOfGames, setListOfGames] = useState([]);
  const [gameObject, setGameObject] = useState({});
  const [index, setIndex] = useState();
  const [foundId, setFoundId] = useState();
  // !! if (listType == gameListId && game.id == listOfGames.game.game.id)

  useEffect(() => {
    const fromLocal = JSON.parse(localStorage.getItem('games'));
    if (fromLocal) {
      setListOfGames(fromLocal);
    }
    setGameObject(game);
  }, [game]);

  // ** Save to localStorage but only if it's not an empty array

  useEffect(() => {
    if (listOfGames == '[]') {
      return;
    } else if (listOfGames.length > 0) {
      localStorage.setItem('games', JSON.stringify(listOfGames));
    }
  }, [listOfGames]);

  // ** Get the index of current game

  useEffect(() => {
    const found = GameId.findIndex((element) => element == game.id);
    setIndex(found);
    console.log(found);
  }, [game]);

  // ** Get the game id to check if game is in list

  useEffect(() => {
    const foundId = GameId.find((element) => element == game.id);
    setFoundId(foundId);
    console.log(foundId);
  }, [game]);

  return (
    <>
      <div className="listSelector-component w-full">
        {foundId ? (
          <div className="flex flex-col gap-2">
            {gameList.map((list) => {
              return (
                <div
                  className="hover:bg-cta-opacity px-2 py-2 rounded-lg"
                  onClick={() => {
                    listOfGames[index].listType = list.id;
                    localStorage.setItem('games', JSON.stringify(listOfGames));
                    OpenListSelector();
                    alert(`The game was changed to list ${list.title}`);
                    console.log(listOfGames);
                  }}
                >
                  <h4 id="button" className="text-lg cursor-pointer">
                    {list.title}
                  </h4>
                  <p className="text-xs font-regular text-gray-400">{list.desc}</p>
                </div>
              );
            })}
            <button
              className="py-1 px-2 bg-cta rounded-md font-medium text-sm"
              onClick={() => {
                listOfGames.splice(index, 1);
                localStorage.setItem('games', JSON.stringify(listOfGames));
                OpenListSelector();
                console.log(listOfGames);
              }}
            >
              Delete from list
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {gameList.map((list) => {
              return (
                <div
                  className="hover:bg-cta-opacity px-2 py-2 rounded-lg"
                  onClick={() => {
                    // !! Create the object to sent to local storage
                    setListOfGames([
                      ...listOfGames,
                      { listType: list.id, id: gameObject.id, game: game },
                    ]);
                    OpenListSelector();
                    alert(`The game was added to list ${list.title}`);
                    console.log(listOfGames);
                  }}
                >
                  <h4 id="button" className="text-lg cursor-pointer">
                    {list.title}
                  </h4>
                  <p className="text-xs font-regular text-gray-400">
                    {list.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default ListSelector;
