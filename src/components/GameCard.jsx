import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const GameCard = ({ games }) => {
  return (
    <>
      {games.map((game) => (
        <Link to={`/game/${game.slug}`} key={game.id}>
          <div className=" game-container cursor-pointer pb-5 relative">
            <LazyLoadImage
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
      ))}
    </>
  );
};

export default GameCard;
