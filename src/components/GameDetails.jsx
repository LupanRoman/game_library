import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { useStateContext } from '../../context/StateContext';
import axios from 'axios';

const GameDetails = () => {
  // const { games } = useStateContext();
  const { slug } = useParams();
  const [game, setGame] = useState({});
  const gameUrl = `https://api.rawg.io/api/games/${slug}?key=${
    import.meta.env.VITE_RAWG_API_KEY
  }`;

  useEffect(() => {
    axios
      .get(gameUrl)
      .then((result) => {
        const response = result.data;
        setGame(response);
        console.log(slug);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { name, description_raw, rating, website, background_image } = game;

  return (
    <>
      {
        <div className="flex flex-col md:flex-row p-5">
          <div className="md:w-1/2">
            <img
              src={background_image}
              alt="cover image of the current game"
              className="bg-image"
            />
          </div>
          <div key={game.id} className="md:w-1/2">
            <h5>{name}</h5>
            <p>{description_raw}</p>
            <p>{rating}</p>

            {console.log(game)}
          </div>
        </div>
      }
    </>
  );
};

export default GameDetails;
