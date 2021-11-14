import { useEffect, useState } from 'react';
import { getMovieCreditsRequest } from '../../shared/services/Api.jsx';
import s from './Credits.module.css';
import PropTypes from 'prop-types';

const Credits = ({ movieId }) => {
  const [credits, setCredits] = useState({});
  const [readyStatus, setReadyStatus] = useState(false);

  useEffect(() => {
    getMovieCreditsRequest(movieId)
      .then(data => data && setCredits(data))
      .then(setReadyStatus(true))
      .catch(error => {
        console.log('error: ', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {readyStatus && credits && (
        <>
          <div className={s.wrapper}>
            {credits.cast &&
              credits.cast.map(actor => {
                return (
                  <div key={actor.id} className={s.actor}>
                    {actor.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        alt={actor.name}
                        width="100"
                      />
                    ) : (
                      <div className={s.noPic}>no pic.</div>
                    )}
                    <p>{actor.name}</p>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </>
  );
};

Credits.propTypes = {
  movieId: PropTypes.string,
};
export default Credits;
