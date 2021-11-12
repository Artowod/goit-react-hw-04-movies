import MoviesList from '../components/MoviesList';
import { getTrendingRequest } from '../shared/services/Api.jsx';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getTrendingRequest()
      .then(({ data }) => {
        setGallery(data.results);
      })
      .catch(error => {
        console.log('error: ', error);
      });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList name={'favorite Movie'} data={gallery} />
    </>
  );
};

export default HomePage;
