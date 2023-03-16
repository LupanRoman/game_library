import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';

const MostPlayed = () => {
  const { games } = useStateContext();

  return (
    <>
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-black md:text-3xl">Most played</h3>
        <div className="game-component flex flex-wrap gap-2 justify-center">
          {games.map((game) =>
            game.rating > 4.41 ? (
              <Link to={`/game/${game.slug}`} key={game.id}>
                <div
                  // key={game.id}
                  className=" game-container cursor-pointer pb-5 relative"
                >
                  <img
                    src={game.background_image}
                    alt=""
                    className="w-game-pic h-36 md:w-36 lg:w-44 md:h-52 lg:h-60 rounded-lg  object-cover"
                  />
                  <div className="absolute">
                    <h4 className="text-white font-medium pl-2 pt-2 pb-2 ">
                      {game.name}
                    </h4>
                  </div>
                </div>
              </Link>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default MostPlayed;
