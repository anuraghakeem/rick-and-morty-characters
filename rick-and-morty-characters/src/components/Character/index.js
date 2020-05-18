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
      : (state.filteredCharacters && state.filteredCharacters.length==0)  && (state.appliedFilters[0].length>0 || state.appliedFilters[1].length>0 || state.appliedFilters[2].length>0) ?(
        // 'No matches :('
        <h4>No matches found. Click on Reset button to try again</h4>
      )
      : state.characters && state.characters.length>0?(
        <Card characters={state.characters} />
      ) 
      :(
        <h4>Loading matched characters...</h4>
      )}
    </CharacterStyle>
  );
}

export default Character;
