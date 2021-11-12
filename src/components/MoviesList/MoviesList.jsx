import s from './MoviesList.module.css';
import { Link, useRouteMatch } from 'react-router-dom';

const MoviesList = ({ data }) => {
  const { url } = useRouteMatch();
  console.log('Url: ', url);
  return (
    <div className={s.wrapper}>
      <ul>
        {data.map(({ title, id }) => (
          <li className={s.item} key={id}>
            <Link to={{ pathname: `/movies/${id}` }}> {title} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
