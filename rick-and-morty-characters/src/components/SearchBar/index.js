import React, { useContext, useState } from 'react';
import { Context } from './../../Store';
import { SearchBarStyle } from './searchBarStyle';
import { getCharacters, getCharactersBySearch } from './../../services/rickandmortyService';

function SearchBar() {
  const [state, dispatch] = useContext(Context);
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = () => {
    console.log("search value before submit button: ",searchValue)
    getCharactersBySearch(searchValue).then((res) =>
      dispatch({
        type: 'SET_SEARCH_VALUE',
        payload: {res:res,searchValue:searchValue},
      }),
    );
  };

  const resetSearchValue = () => {
    window.location.reload();
  };

  return (
    <SearchBarStyle>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="primary" type="button" onClick={handleSubmit}>
        Search
      </button>
      {state.searchValue && (
        <button className="danger" type="button" onClick={resetSearchValue}>
          Reset All
        </button>
      )}
    </SearchBarStyle>
  );
}

export default SearchBar;
