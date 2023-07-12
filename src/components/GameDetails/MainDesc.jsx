import React, { useState, useEffect } from 'react';
import ListSelector from '../PersonalSpace/ListSelector';
import { IoIosArrowDown } from 'react-icons/io';

const MainDesc = ({ game }) => {
  const [showDesc, setShowDesc] = useState(false);
  const [gameId, setGameId] = useState([]);
  const [foundId, setFoundId] = useState();
  const { description_raw, name, id } = game;

  // * Using defValue to default to empty string for the substring method
  const defValue = description_raw || '';

  const openListSelector = () => {
    const listSelectorWrapper = document.getElementById('listSelector-wrapper');
    listSelectorWrapper.classList.toggle('active');
  };

  useEffect(() => {
    const fromLocal = JSON.parse(localStorage.getItem('games') || '[]');
    setListOfGames(fromLocal);
  }, [foundId]);

  const [listOfGames, setListOfGames] = useState([]);

  // !! Make an array with the games id's

  useEffect(() => {
    const idsFromLocal = listOfGames?.map((item) => item.id);
    setGameId(idsFromLocal);
    console.log(idsFromLocal);
  }, [listOfGames, game]);

  useEffect(() => {
    const found = gameId.find((element) => element == id);
    setFoundId(found);
    console.log(found);
  }, [gameId]);

  return (
    <>
      <div>
        <div key={id} className=" flex flex-col">
          <h5 className="font-black text-xl md:text-3xl lg:text-6xl mb-2">
            {name}
          </h5>
          <div className="mb-2 relative">
            {foundId ? (
              <div
                className="py-2 px-3 bg-cta rounded-md font-medium text-sm flex items-center justify-between cursor-pointer max-w-xs"
                onClick={openListSelector}
              >
                <button>Change list</button>
                <IoIosArrowDown />
              </div>
            ) : (
              <div
                className="py-2 px-3 bg-cta rounded-md font-medium text-sm flex items-center justify-between cursor-pointer max-w-xs"
                onClick={openListSelector}
              >
                <button>Add to list</button>
                <IoIosArrowDown />
              </div>
            )}
            <div
            id="listSelector-wrapper"
            className="listSelector-wrapper hidden dark:bg-dark-bg top-12"
          >
            <ListSelector
              GameId={gameId}
              game={game}
              OpenListSelector={openListSelector}
            />
          </div>
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-black md:text-2xl">About</h4>
            <p className="">
              {showDesc ? defValue : `${defValue.substring(0, 197)}...`}
              <button
                className="text-cta font-medium text-sm"
                onClick={() => setShowDesc(!showDesc)}
              >
                {showDesc ? 'Show Less' : 'Show More'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDesc;
