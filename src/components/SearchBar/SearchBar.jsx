import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import s from './SearchBar.module.css';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const location = useLocation();
  const history = useHistory();

  const onInputChange = e => {
    const { value } = e.target;
    setSearchInput(value);
  };
  const searchHandler = e => {
    history.push({ ...location, search: `query=${searchInput}` });
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

export default SearchBar;
