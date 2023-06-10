import { api } from './configs/axiosConfig';

export const GenresAPI = {
  getGenres: async function () {
    const response = await api.request({
      url: `/genres?key=${import.meta.env.VITE_RAWG_API_KEY}`,
      method: 'GET',
    });
    return response;
  },
  getGenreDetails: async function (id) {
    const response = await api.request({
      url: `/genres/${id}?key=${import.meta.env.VITE_RAWG_API_KEY}`,
      method: 'GET',
    });
    return response;
  },
};
