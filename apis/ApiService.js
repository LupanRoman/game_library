import axios from 'axios';
import { useEffect } from 'react';
import FetchClient from './FetchClient';

class ApiService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async getMostPlayedGames() {
    axios
      .get(
        `https://api.rawg.io/api/games?key=${
          import.meta.env.VITE_RAWG_API_KEY
        }&metacritic=90,100`
      )
      .then((result) => {
        const response = result.data;
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default ApiService;
