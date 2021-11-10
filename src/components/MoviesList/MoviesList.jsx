import s from './MoviesList.module.css';
const MoviesList = ({ name }) => {
  return (
    <div className={s.wrapper}>
      <ul>
        <li>{name}</li>
        <li>{name}</li>
        <li>{name}</li>
        <li>{name}</li>
        <li>{name}</li>
        <li>{name}</li>
        <li>{name}</li>
        <li>{name}</li>
      </ul>
    </div>
  );
};

export default MoviesList;
