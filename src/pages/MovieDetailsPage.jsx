import { Link, useRouteMatch, useParams, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetailRequest } from '../shared/services/Api.jsx';
import s from './Pages.module.css';
import Credits from '../components/Credits/Credits';
import Reviews from '../components/Reviews/Reviews';

const MovieDetailsPage = () => {
  const [readyStatus, setReadyStatus] = useState(false);
  //-----------movieId -----------------
  //здесь то что идет после двоеточия:
  // <Route path="/movies/:movieId"
  const { movieId } = useParams();
  console.log(movieId);
  //----------------------------
  const { url } = useRouteMatch();
  console.log('Url: ', url);

  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetailRequest(movieId)
      .then(data => data && setMovie(data))
      .then(setReadyStatus(true))
      .catch(error => {
        console.log('error: ', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*   useEffect(() => {
    getMovieDetailRequest(movieId)
      .then(data => data && setMovie(data))
      .catch(error => {
        console.log('error: ', error);
      });
  }, [movieId]); */

  return (
    <>
      <Link className={s.link} to="/">
        Back
      </Link>
      {readyStatus && movie.backdrop_path && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
            width="500"
          />
          <h2>{movie.title}</h2>
          <h3>Overview</h3>
          <p> {movie.overview}</p>
          <h3> Genres</h3>

          <p>{movie.genres && movie.genres.map(item => `${item.name} `)}</p>
        </>
      )}
      <div className={s.addInfo_wrapper}>
        <h4> Additional information</h4>
        <ul>
          <li>
            <Link className={s.link} to={`${url}/credits`}>
              Credits
            </Link>
          </li>
          <li>
            <Link className={s.link} to={`${url}/reviews`}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Route path="/movies/:movieId/credits" exact>
        <Credits movieId={movieId} />
      </Route>
      <Route path="/movies/:movieId/reviews" exact>
        <Reviews movieId={movieId} />
      </Route>
    </>
  );
};

export default MovieDetailsPage;
