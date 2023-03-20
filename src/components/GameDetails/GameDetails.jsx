import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import MainDesc from './MainDesc';
import Details from './Details';
import Layout from '../Layout/Layout';

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
      <Layout>
        <div className="game-details-component flex flex-col pt-5 xl:pt-5 xl:px-24 gap-10">
          <div className="top-container">
            <img
              src={background_image}
              alt={`cover image of the ${name}`}
              className="bg-image rounded-lg"
            />
          </div>
          <div className="bottom-container flex flex-col gap-5">
            <MainDesc game={game} />
            <Details game={game} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GameDetails;
