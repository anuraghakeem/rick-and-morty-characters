import React, { useEffect, useContext } from 'react';

import Card from './../Card';
import { CharacterStyle } from './CharacterStyle';

import { getCharacters } from './../../services/rickandmortyService';
import { Context } from './../../Store';

function Character() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    getCharacters().then((res) =>
      dispatch({
        type: 'SET_CHARACTERS',
        payload: res,
      }),
    );
  }, []);

  return (
    <CharacterStyle>
      {state.filteredCharacters && state.filteredCharacters.length>0 ? (
        <Card characters={state.filteredCharacters} />
      )
      : state.filteredCharacters && state.filteredCharacters.length==0 && state.searchValue.length>0 && state.appliedFilters.length>0 ?(
        'No matches :('
      )
      // : state.searchResultCharacters && state.searchResultCharacters.length>0?(
      //   <Card characters={state.searchResultCharacters} />
      // ) 
      : state.characters && state.characters.length>0?(
        <Card characters={state.characters} />
      ) 
      :(
        'Loading matched characters...'
      )}
    </CharacterStyle>
  );
}

export default Character;
