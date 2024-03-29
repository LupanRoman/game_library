import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ListView = ({ ListId }) => {
  // !! Get data from local storage and make changes with it

  useEffect(() => {
    const fromLocal = JSON.parse(localStorage.getItem('games') || '[]');
    setListOfGames(fromLocal);
  }, []);

  const [listOfGames, setListOfGames] = useState([]);

  return (
    <>
      <div className="listView-component flex flex-wrap gap-5 mt-5">
        {listOfGames.map((game) => {
          // !! Read the game list from local storage

          if (game.listType == ListId) {
            return (
              <Link to={`/game/${game.game.slug}`} key={game.game.id}>
                <div className=" game-container cursor-pointer pb-5 relative">
                  <LazyLoadImage
                    threshold={100}
                    src={game.game.background_image}
                    alt="game thumbnail image"
                    className="w-game-pic h-52 md:w-36 lg:w-44 md:h-52 lg:h-60 rounded-lg  object-cover"
                  />
                  <div className="absolute">
                    <h4 className="text-white font-medium pl-2 pt-2 pb-2 ">
                      {game.game.name}
                    </h4>
                  </div>
                </div>
              </Link>
            );
          }
          // TODO Make the state for empty list view
        })}
      </div>
    </>
  );
};

export default ListView;
