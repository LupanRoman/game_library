import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { useStateContext } from '../../context/StateContext';
import axios from 'axios';

const GameDetails = () => {
  // const { games } = useStateContext();
  const { slug } = useParams();
  const [game, setGame] = useState({});
  const [showDesc, setShowDesc] = useState(false);
  const {
    name,
    description_raw,
    rating,
    released,
    developers,
    website,
    background_image,
    genres,
    parent_platforms,
    publishers,
  } = game;

  // * Using defValue to default to empty string to be able to use the substring method
  const defValue = description_raw || '';
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

  return (
    <>
      {
        <div className="flex flex-col md:flex-row p-5 pt-10 gap-10">
          <div className="md:w-1/2">
            <img
              src={background_image}
              alt="cover image of the current game"
              className="bg-image rounded-lg"
            />
          </div>
          <div key={game.id} className="md:w-1/2 flex flex-col">
            <h5 className="font-black text-xl mb-5">{name}</h5>
            {/* <p>{description_raw}</p> */}
            <div className="flex flex-col">
              <p className="">
                {showDesc ? defValue : `${defValue.substring(0, 197)}...`}
                <button
                  className="text-cta font-medium text-sm ml-2"
                  onClick={() => setShowDesc(!showDesc)}
                >
                  {showDesc ? 'Show Less' : 'Show More'}
                </button>
              </p>
            </div>
            <p>{rating}</p>
            <p className="flex gap-2 font-medium">
              {genres ? genres.map((genre) => <p>{genre.name}</p>) : ''}
            </p>
            {/* <div>
              <div>
                <p>Released on</p>
                <h4>Genres</h4>
                <p>Developer</p>
                <h4>Developers</h4>
              </div>
              <div>
                <p>Publisher</p>
                <h4>Publisher</h4>
                <p>Genre</p>
                <p className="flex gap-2 font-medium">
                  {genres ? genres.map((genre) => <p>{genre.name}</p>) : ''}
                </p>
              </div>
              <p>Website</p>
            </div> */}

            {console.log(game)}
          </div>
        </div>
      }
    </>
  );
};

export default GameDetails;
