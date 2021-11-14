import { useEffect, useState } from 'react';
import { getMovieReviewsRequest } from '../../shared/services/Api.jsx';
import s from './Reviews.module.css';
import PropTypes from 'prop-types';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviewsRequest(movieId)
      .then(data => data && setReviews(data.results))
      .catch(error => {
        console.log('error: ', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={s.wrapper}>
        {reviews && reviews.length === 0 ? (
          <p>We don`t have any reviews for this movie</p>
        ) : (
          <ul>
            {reviews &&
              reviews.map(({ id, author, content }) => {
                return (
                  <li key={id} className={s.author}>
                    {author && <h3 className={s.author}>Author: {author}</h3>}
                    <p className={s.content}>{content}</p>
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    </>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string,
};

export default Reviews;
