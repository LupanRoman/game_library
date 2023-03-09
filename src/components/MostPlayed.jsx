import React from 'react';
import { Link } from 'react-router-dom';
import mostPlayed from '../../data/mostPlayed';

const MostPlayed = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-black md:text-3xl">Most played</h3>
        <div className="game-component flex flex-wrap gap-2 justify-center">
          {mostPlayed.map((game) => (
            <Link to={`/game/${game.id}`} key={game.id}>
              <div
                key={game.id}
                className=" game-container cursor-pointer pb-5 relative"
              >
                <img
                  src={game.image}
                  alt=""
                  className="w-game-pic md:w-36 lg:w-44 rounded-lg"
                />
                <div className="absolute">
                  <h4 className="text-white font-medium pl-2 pt-2 pb-2 ">
                    {game.title}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MostPlayed;
