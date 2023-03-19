import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import MainDesc from './MainDesc';
import Details from './Details';

const GameDetails = () => {
  const { slug } = useParams();
  const [game, setGame] = useState({});
  const { name, background_image } = game;

  const gameUrl = `https://api.rawg.io/api/games/${slug}?key=${
    import.meta.env.VITE_RAWG_API_KEY
  }`;

  useEffect(() => {
    axios
      .get(gameUrl)
      .then((result) => {
        const response = result.data;
        setGame(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {
        <div className="flex flex-col md:pt-32 md:flex-row p-5 lg:p-32 gap-10">
          <div className="md:w-1/2">
            <img
              src={background_image}
              alt={`cover image of the ${name}`}
              className="bg-image rounded-lg"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-5">
            <MainDesc game={game} />
            <Details game={game} />
          </div>
        </div>
      }
    </>
  );
};

export default GameDetails;
