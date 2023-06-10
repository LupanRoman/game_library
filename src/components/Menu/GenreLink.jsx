import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../../context/StateContext';
import { GenresAPI } from '../../../apis/GenresAPI';

const GenreLink = () => {
  const [genre, setGenre] = useState([]);

  const { closeMenu } = useStateContext();

  // ** Call to get the genre name

  useEffect(() => {
    GenresAPI.getGenres().then((result) => {
      const response = result.data.results;
      setGenre(response);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-2 pr-2 pb-10">
        {genre
          ? genre.map((item) => (
              <Link onClick={closeMenu} to={`/genre/${item.id}`} key={item.id}>
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
