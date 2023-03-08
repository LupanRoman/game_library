import React from 'react';
import mostPlayed from '../../data/mostPlayed';

const MostPlayed = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-black md:text-3xl">Most played</h3>
        <div className="game-component flex flex-wrap gap-2 justify-center">
          {mostPlayed.map((game) => (
            <div key={game.id} className="md:pb-5">
              <img
                src={game.image}
                alt=""
                className="w-game-pic md:w-36 lg:w-44 rounded-lg"
              />
              <h4>{game.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MostPlayed;
