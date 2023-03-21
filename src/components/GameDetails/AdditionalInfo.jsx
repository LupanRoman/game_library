import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdditionalInfo = ({ game, slug }) => {
  const { website, ratings, id } = game;
  const [images, setImages] = useState([]);

  //   !! API Call

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

  //   !! API Call

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
        <div className="flex flex-wrap gap-4">
          {images
            ? images.map((item) => <img src={item.image} width={120} />)
            : null}
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;
