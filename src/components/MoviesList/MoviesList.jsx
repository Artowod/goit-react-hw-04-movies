import s from './MoviesList.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ moviesData, prevPageParam }) => {
  return (
    <div className={s.wrapper}>
      <ul>
        {moviesData.map(({ title, id }) => (
          <li className={s.item} key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { prevPageParam: prevPageParam },
              }}
            >
              {' '}
              {title}{' '}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.object).isRequired,
  prevPageParam: PropTypes.string,
};

export default MoviesList;
