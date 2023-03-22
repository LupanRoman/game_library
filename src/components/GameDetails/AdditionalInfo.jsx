import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdditionalInfo = ({ game, slug }) => {
  const { website, ratings, id, stores } = game;
  // const [storesLinks, setStoresLinks] = useState([]);

  // const storesUrl = `https://api.rawg.io/api/games/${slug}/stores?key=${
  //   import.meta.env.VITE_RAWG_API_KEY
  // }`;

  // useEffect(() => {
  //   axios
  //     .get(storesUrl)
  //     .then((result) => {
  //       const response = result.data.results;
  //       console.log(response);
  //       response?.map((item) => setStoresLinks(item.store_id));

  //       console.log(game);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <a href={website} target="_blank" className="font-medium text-cta">
            Official Website
          </a>
        </div>
        <div>
          <h4 className="font-light">Ratings</h4>
          <div className="flex flex-wrap gap-4">
            {ratings
              ? ratings.map((rating) => (
                  <div className="flex flex-col">
                    <p>{rating.title}</p>
                    <p>{rating.percent} %</p>
                  </div>
                ))
              : ''}
          </div>
        </div>
        <div>
          <h4>Stores</h4>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;
