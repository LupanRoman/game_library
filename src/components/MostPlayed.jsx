import React from 'react';
import { useStateContext } from '../../context/StateContext';
import GameCard from './GameCard';


const MostPlayed = () => {
  const { games } = useStateContext();

  return (
    <>
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-black md:text-3xl ">Most played</h3>
        <div className="game-component flex flex-wrap gap-2 justify-center">
          <GameCard games={games} />
        </div>
      </div>
    </>
  );
};

export default MostPlayed;
