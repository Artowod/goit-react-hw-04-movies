import {
  Link,
  useRouteMatch,
  useParams,
  Route,
  useLocation,
  BrowserRouter,
} from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';
import { getMovieDetailRequest } from '../shared/services/Api.jsx';
import s from './Pages.module.css';

const Credits = lazy(() => import('../components/Credits/Credits'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const MovieDetails = lazy(() => import('../components/MovieDetails'));
const AdditionalInfo = lazy(() =>
  import('../components/MovieDetails/AdditionalInfo'),
);

const MovieDetailsPage = () => {
  const { state } = useLocation();
  const [readyStatus, setReadyStatus] = useState(false);
  const { movieId } = useParams();
  const { url } = useRouteMatch();
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

  return (
    <>
      <Link
        className={s.link}
        to={
          state && state.prevPageParam
            ? `/movies?query=${state.prevPageParam}`
            : '/'
        }
      >
        Back
      </Link>

      {readyStatus && movie && (
        <>
          <Suspense fallback={<h2> Lodaing...</h2>}>
            <MovieDetails movieData={movie} />

            <BrowserRouter>
              <AdditionalInfo state={state} url={url} movieId={movieId} />

              <Route path="/movies/:movieId/cast" exact>
                <Credits movieId={movieId} />
              </Route>
              <Route path="/movies/:movieId/reviews" exact>
                <Reviews movieId={movieId} />
              </Route>
            </BrowserRouter>
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
