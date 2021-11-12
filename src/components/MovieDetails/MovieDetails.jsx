import s from './MovieDetails.module.css';

const MovieDetails = ({ params }) => {
  return (
    <>
      {params.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${params.backdrop_path}`}
          alt={params.title}
          width="500"
        />
      )}
      <h2>{params.title}</h2>
      {params.overview && (
        <>
          <h3>Overview</h3>
          <p> {params.overview}</p>
        </>
      )}
      {params.genres && (
        <>
          <h3> Genres</h3>
          <p>{params.genres && params.genres.map(item => `${item.name} `)}</p>
        </>
      )}
    </>
  );
};

export default MovieDetails;
