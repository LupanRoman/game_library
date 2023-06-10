import { api } from './configs/axiosConfig';

export const GamesAPI = {
  getAllGames: async function () {
    const response = await api.request({
      url: `/games?key=${import.meta.env.VITE_RAWG_API_KEY}`,
      method: 'GET',
    });
    return response;
  },
  getMostPlayedGames: async function () {
    const response = await api.request({
      url: `/games?key=${import.meta.env.VITE_RAWG_API_KEY}&metacritic=90,100`,
      method: 'GET',
    });
    return response;
  },
  getGamesGenre: async function (id, pageNr) {
    const response = await api.request({
      url: `/games?key=${
        import.meta.env.VITE_RAWG_API_KEY
      }&genres=${id}&page=${pageNr}`,
      method: 'GET',
    });
    return response;
  },
  getGameDetails: async function (slug) {
    const response = await api.request({
      url: `/games/${slug}?key=${import.meta.env.VITE_RAWG_API_KEY}`,
      method: 'GET',
    });
    return response;
  },
  getGameScreenshots: async function (slug) {
    const response = await api.request({
      url: `/games/${slug}/screenshots?key=${
        import.meta.env.VITE_RAWG_API_KEY
      }`,
      method: 'GET',
    });
    return response;
  },
};
