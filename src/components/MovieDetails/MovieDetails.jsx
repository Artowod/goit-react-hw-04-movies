import PropTypes from 'prop-types';

const MovieDetails = ({
  movieData: { backdrop_path, title, overview, genres },
}) => {
  return (
    <>
      {backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
          width="500"
        />
      )}
      <h2>{title}</h2>
      {overview && (
        <>
          <h3>Overview</h3>
          <p> {overview}</p>
        </>
      )}
      {genres && (
        <>
          <h3> Genres</h3>
          <p>{genres && genres.map(item => `${item.name} `)}</p>
        </>
      )}
    </>
  );
};
MovieDetails.propTypes = {
  movieData: PropTypes.shape({
    backdrop_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }).isRequired,
};
export default MovieDetails;
