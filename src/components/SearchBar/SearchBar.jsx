import { useState } from 'react';
import s from './SearchBar.module.css';
//import PropTypes from 'prop-types';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const onInputChange = e => {
    const { value } = e.target;
    setSearchInput(value);
  };
  const searchHandler = e => {
    console.log(searchInput);
  };

  return (
    <header className={s.searchBar}>
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
      <button
        type="button"
        className={s.searchForm_button}
        onClick={searchHandler}
      >
        Search
      </button>
    </header>
  );
};

// SearchBar.propTypes = {
//   onSubmitHandler: PropTypes.func.isRequired,
// };

export default SearchBar;
