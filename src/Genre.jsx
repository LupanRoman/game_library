import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import GameCard from './components/GameCard';
import Layout from './components/Layout/Layout';

const Genre = () => {
  const { id } = useParams();
  const [games, setGames] = useState([]);
  const [pageNr, setPageNr] = useState(1);

  const genreFilter = `https://api.rawg.io/api/games?key=${
    import.meta.env.VITE_RAWG_API_KEY
  }&genres=${id}&page=${pageNr}`;

  useEffect(() => {
    axios
      .get(genreFilter)
      .then((response) => {
        const result = response.data.results;
        setGames(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, pageNr]);

  useEffect(() => {
    setPageNr(1);
  }, [id]);

  return (
    <Layout>
      <div>{id}</div>
      <div className="flex flex-wrap gap-4 justify-center">
        <GameCard games={games} />
      </div>
      <button onClick={() => setPageNr(pageNr + 1)}>+</button>
    </Layout>
  );
};

export default Genre;
