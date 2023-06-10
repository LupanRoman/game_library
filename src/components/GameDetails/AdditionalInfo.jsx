import React, { useState, useEffect } from 'react';

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
  //       setStoresLinks(response?.map((item) => item.url));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <div className="flex flex-col gap-5 dark:text-dark-text">
        <div>
          <a href={website} target="_blank" className="font-medium text-cta">
            Official Website
          </a>
        </div>
        <div>
          <h4 className="font-light mb-2">Ratings</h4>
          <div className="flex flex-wrap gap-4 mb-10">
            {ratings?.map((rating) => (
              <div className="flex gap-2">
                <p className="font-medium">{rating.title}</p>
                <p>{rating.percent}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;
