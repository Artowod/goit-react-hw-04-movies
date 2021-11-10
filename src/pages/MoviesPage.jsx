import MoviesList from '../components/MoviesList';
import SearchBar from '../components/SearchBar';

const MoviesPage = () => {
  return (
    <>
      <SearchBar />
      <MoviesList name={'Movie from the list'} />
    </>
  );
};

export default MoviesPage;
