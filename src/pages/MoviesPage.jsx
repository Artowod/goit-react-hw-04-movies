import MoviesList from '../components/MoviesList';
import SearchBar from '../components/SearchBar';
import { useLocation } from 'react-router-dom';
import { searchMovie } from '../shared/services/Api.jsx';
import { useState, useEffect } from 'react';

const MoviesPage = () => {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('query');

  const [galleryByRequest, setGalleryByRequest] = useState([]);

  useEffect(() => {
    searchParam &&
      searchMovie(searchParam)
        .then(({ data }) => {
          setGalleryByRequest(data.results);
        })
        .catch(error => {
          console.log('error: ', error);
        });
  }, [searchParam]);

  return (
    <>
      <SearchBar />
      {searchParam && (
        <MoviesList moviesData={galleryByRequest} prevPageParam={searchParam} />
      )}
    </>
  );
};

export default MoviesPage;
