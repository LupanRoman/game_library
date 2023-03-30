import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GenreLink = () => {
  const [genre, setGenre] = useState([]);

  const genreUrl = `https://api.rawg.io/api/genres?key=${
    import.meta.env.VITE_RAWG_API_KEY
  }`;

  useEffect(() => {
    axios
      .get(genreUrl)
      .then((result) => {
        const response = result.data.results;
        setGenre(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-2 pr-2 pb-10">
        {genre
          ? genre.map((item) => (
              <Link to={`/genre/${item.id}`}>
                <p className="genres-filter dark:bg-dark-link dark:hover:bg-desaturated-cta">
                  {item.name}
                </p>
              </Link>
            ))
          : ''}
      </div>
    </>
  );
};

export default GenreLink;
