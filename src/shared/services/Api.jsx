import { api_key, host, endpoint } from './settings.json';

import axios from 'axios';

export function getTrendingRequest() {
  const sendParam = {
    api_key,
  };

  //   sendParam.q = q;
  //   sendParam.page = page;

  const response = axios.get(host + endpoint.getTrending, {
    params: sendParam,
  });

  return response;
}

export function getMovieDetailRequest(id) {
  const sendParam = {
    api_key,
  };

  const response = axios
    .get(host + endpoint.getMovieDetail + id, {
      params: sendParam,
    })
    .catch(function (error) {
      console.log(error.toJSON());
      return Promise.reject(new Error('Not found'));
    });

  return response.then(({ data }) => data);
}

export function getMovieCreditsRequest(id) {
  const sendParam = {
    api_key,
  };

  const response = axios
    .get(host + endpoint.getMovieDetail + id + '/credits', {
      params: sendParam,
    })
    .catch(function (error) {
      console.log(error.toJSON());
      return Promise.reject(new Error('Not found'));
    });

  return response.then(({ data }) => data);
}

export function getMovieReviewsRequest(id) {
  const sendParam = {
    api_key,
  };

  const response = axios
    .get(host + endpoint.getMovieDetail + id + '/reviews', {
      params: sendParam,
    })
    .catch(function (error) {
      console.log(error.toJSON());
      return Promise.reject(new Error('Not found'));
    });

  return response.then(({ data }) => data);
}

export function searchMovie(query) {
  const sendParam = {
    api_key,
    query,
  };

  const response = axios.get(host + endpoint.searchMovie, {
    params: sendParam,
  });

  return response;
}

//=====================================

//   "api_key": "13b5a298ebf841dea0e3d6624b351e0e",
//   "host": "https://api.themoviedb.org/3/",
//   "endpoint": {
//     "getTrending": "trending/movie/day", //https://api.themoviedb.org/3/trending/movie/day?api_key=13b5a298ebf841dea0e3d6624b351e0e
//     "searchMovie": "search/movie", // https://api.themoviedb.org/3/search/movie?api_key=13b5a298ebf841dea0e3d6624b351e0e&language=en-US&page=1&include_adult=false&query=steel
//     "getMovieDetail": "movie/<<id>>", // https://api.themoviedb.org/3/movie/370172?api_key=13b5a298ebf841dea0e3d6624b351e0e&language=en-US
//     "getMovieCredits": "movie/<<id>>/credits", // https://api.themoviedb.org/3/movie/370172/credits?api_key=13b5a298ebf841dea0e3d6624b351e0e&language=en-US
//     "getMovieReviews": "movie/<<id>>/reviews" //https://api.themoviedb.org/3/movie/370172/reviews?api_key=13b5a298ebf841dea0e3d6624b351e0e&language=en-US&page=1
//   }
// }
