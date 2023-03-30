import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdditionalInfo = ({ game, slug }) => {
  const { website, ratings, id, stores } = game;
  const [storeName, setStoreName] = useState([]);
  const [storesLinks, setStoresLinks] = useState([]);
  const [storeId, setStoreId] = useState([]);

  const storesUrl = `https://api.rawg.io/api/games/${slug}/stores?key=${
    import.meta.env.VITE_RAWG_API_KEY
  }`;

  useEffect(() => {
    axios
      .get(storesUrl)
      .then((result) => {
        const response = result.data.results;
        // console.log(response);
        setStoresLinks(response?.map((item) => item.url));
        console.log(game);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setStoreName(stores?.map((item) => item.store.name));
    setStoreId(stores?.map((store) => store.id));
  }, []);

  const storeData = storeId?.map((id, index) => {
    return {
      id: id,
      storeName: storeName?.[index],
      storesLinks: storesLinks?.[index],
    };
  });

  console.log(storeData);

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
