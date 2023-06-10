import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

// handling errors for all the apis
const errorHandler = (error) => {
  const statusCode = error.response?.status;

  //   logging only the error that are not 401
  if (statusCode && statusCode !== 401) {
    console.log(error);
  }

  return Promise.reject(error);
};

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
