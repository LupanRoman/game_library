import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import GameCard from './components/GameCard';
import Layout from './components/Layout/Layout';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';

const Genre = () => {
  const { id } = useParams();
  const [games, setGames] = useState([]);
  const [genre, setGenre] = useState([]);
  const [pageNr, setPageNr] = useState(1);

  const scroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const genreFilter = `https://api.rawg.io/api/games?key=${
    import.meta.env.VITE_RAWG_API_KEY
  }&genres=${id}&page=${pageNr}`;

  const genreDetails = `https://api.rawg.io/api/genres/${id}?key=${
    import.meta.env.VITE_RAWG_API_KEY
  }`;

  useEffect(() => {
    axios
      .get(genreDetails)
      .then((result) => {
        const response = result.data;
        setGenre(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(genreFilter)
      .then((result) => {
        const response = result.data.results;
        setGames(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, pageNr]);

  // ** Resets the page number state when changing genres
  useEffect(() => {
    setPageNr(1);
  }, [id]);

  return (
    <Layout>
      <div className="py-5">
        <h4 className="text-2xl font-black">{genre.name}</h4>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <GameCard games={games} />
      </div>
      <div className="flex py-10 justify-center gap-4">
        <button
          className="bg-cta py-2 px-4 rounded-full"
          onClick={() => setPageNr(pageNr - 1)}
        >
          {<HiChevronLeft />}
        </button>
        <button
          className="bg-cta py-2 px-4 rounded-full"
          onClick={() => {
            setPageNr(pageNr + 1);
            scroll();
          }}
        >
          {<HiChevronRight />}
        </button>
      </div>
    </Layout>
  );
};

export default Genre;
