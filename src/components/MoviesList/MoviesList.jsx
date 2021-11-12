import s from './MoviesList.module.css';
import { Link } from 'react-router-dom';

const MoviesList = ({ data, prevPageParam }) => {
  return (
    <div className={s.wrapper}>
      <ul>
        {data.map(({ title, id }) => (
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

export default MoviesList;
