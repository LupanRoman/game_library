import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';
import { GamesAPI } from '../../apis/GamesAPI';

const MostPlayed = () => {
  const [mostPlayedGames, setMostPlayedGames] = useState([]);

  useEffect(() => {
    GamesAPI.getMostPlayedGames().then((game) => {
      const response = game.data;
      setMostPlayedGames(response.results);
      console.log(response);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-black md:text-3xl ">Most played</h3>
        <div className="game-component flex flex-wrap gap-2 justify-between">
          <GameCard games={mostPlayedGames} />
        </div>
      </div>
    </>
  );
};

export default MostPlayed;
