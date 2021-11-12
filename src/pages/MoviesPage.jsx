import MoviesList from '../components/MoviesList';
import SearchBar from '../components/SearchBar';

const MoviesPage = () => {
  return (
    <>
      <SearchBar />
      <MoviesList data={[]} />
    </>
  );
};

export default MoviesPage;
