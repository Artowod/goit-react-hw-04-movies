import PropTypes from 'prop-types';

const MovieDetails = ({ movieData }) => {
  return (
    <>
      {movieData.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
          alt={movieData.title}
          width="500"
        />
      )}
      <h2>{movieData.title}</h2>
      {movieData.overview && (
        <>
          <h3>Overview</h3>
          <p> {movieData.overview}</p>
        </>
      )}
      {movieData.genres && (
        <>
          <h3> Genres</h3>
          <p>
            {movieData.genres && movieData.genres.map(item => `${item.name} `)}
          </p>
        </>
      )}
    </>
  );
};
MovieDetails.propTypes = {
  movieData: PropTypes.object.isRequired,
};
export default MovieDetails;
