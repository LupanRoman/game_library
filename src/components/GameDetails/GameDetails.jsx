import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import MainDesc from './MainDesc';
import Details from './Details';
import Layout from '../Layout/Layout';
import AdditionalInfo from './AdditionalInfo';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const GameDetails = () => {
  const { slug } = useParams();
  const [game, setGame] = useState({});
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const { name, background_image } = game;

  // !! API Call

  const gameUrl = `https://api.rawg.io/api/games/${slug}?key=${
    import.meta.env.VITE_RAWG_API_KEY
  }`;

  const screenShots = `https://api.rawg.io/api/games/${slug}/screenshots?key=${
    import.meta.env.VITE_RAWG_API_KEY
  }`;

  useEffect(() => {
    axios
      .get(screenShots)
      .then((result) => {
        const response = result.data.results;
        setImages(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  // !! API Call

  return (
    <>
      <Layout>
        <div className="game-details-component flex flex-col pt-5 xl:pt-5 xl:px-24 gap-10">
          <div className="top-container">
            <LazyLoadImage
              src={images[0]?.image && images[index]?.image}
              alt={`cover image of the ${name}`}
              className="bg-image rounded-lg"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {images?.map((item, i) => (
              <LazyLoadImage
                key={i}
                src={item.image}
                width={120}
                className="rounded-lg cursor-pointer"
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
          <div className="bottom-container flex flex-col gap-5">
            <MainDesc game={game} />
            <Details game={game} />
            <AdditionalInfo game={game} slug={slug} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GameDetails;
