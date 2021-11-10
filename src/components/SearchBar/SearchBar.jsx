import { useState } from 'react';
import s from './SearchBar.module.css';
//import PropTypes from 'prop-types';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    //go to the Server !
    //    onSubmitHandler(searchInput);
  };

  const onInputChange = e => {
    const { value } = e.target;
    setSearchInput(value);
  };

  return (
    <header className={s.searchBar}>
      <form className={s.searchForm} onSubmit={onSubmit}>
        <input
          className={s.searchForm_input}
          type="text"
          autoComplete="off"
          name="searchInput"
          value={searchInput}
          autoFocus
          placeholder="please type keyword here"
          onChange={onInputChange}
        />
        <button type="submit" className={s.searchForm_button}>
          Search
        </button>
      </form>
    </header>
  );
};

// SearchBar.propTypes = {
//   onSubmitHandler: PropTypes.func.isRequired,
// };

export default SearchBar;
