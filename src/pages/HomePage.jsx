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

  console.log(gallery);
  // 0:
  // adult: false
  // backdrop_path: "/cinER0ESG0eJ49kXlExM0MEWGxW.jpg"
  // genre_ids: (3) [28, 12, 14]
  // id: 566525
  // media_type: "movie"
  // original_language: "en"
  // original_title: "Shang-Chi and the Legend of the Ten Rings"
  // overview: "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization."
  // popularity: 1858.052
  // poster_path: "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg"
  // release_date: "2021-09-01"
  // title: "Shang-Chi and the Legend of the Ten Rings"
  // video: false
  // vote_average: 7.8
  // vote_count: 1556

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList name={'favorite Movie'} data={gallery} />
    </>
  );
};

export default HomePage;
