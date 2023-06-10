import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import GameCard from './components/GameCard';
import Layout from './components/Layout/Layout';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { GenresAPI } from '../apis/GenresAPI';
import { GamesAPI } from '../apis/GamesAPI';

const Genre = () => {
  const { id } = useParams();
  const [games, setGames] = useState([]);
  const [genre, setGenre] = useState([]);
  const [pageNr, setPageNr] = useState(1);

  const scroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // ** Here i get data for the genres
  // ** This is the page that displays games based on a genre

  useEffect(() => {
    GenresAPI.getGenreDetails(id).then((result) => {
      const response = result.data;
      setGenre(response);
    });
  }, [id]);

  useEffect(() => {
    GamesAPI.getGamesGenre(id, pageNr).then((result) => {
      const response = result.data.results;
      setGames(response);
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
