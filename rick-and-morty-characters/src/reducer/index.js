const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      let newState_SET_CHARACTERS={...state}
      newState_SET_CHARACTERS.characters=[...action.payload.results];
      // newState_SET_CHARACTERS.filteredCharacters=[...action.payload.results];
      console.log(newState_SET_CHARACTERS)
      // return {
      //   ...state,
      //   characters: action.payload.results,
      //   filteredCharacters: action.payload.results
      // };
      return newState_SET_CHARACTERS;
    case 'SET_FILTER_BY_VALUE_GENDER':
      let newState = {...state};
      // let newState = JSON.parse(JSON.stringify(Object.assign({}, state)));
      console.log("New state copy of State: ",newState)
      let value = action.payload.value;
      let name = action.payload.name;
      let filteredValues=[];
      // let filteredValues = state.characters.filter(character => {
      //     //return any character whose gender matches
      //     return character.gender.includes(value) || character.location.name.includes(value) || action.payload.episodeUrl?character.episode.includes(value):;
      // });
      console.log("action.payload.episodeurl:",action.payload.episodeurl)
      state.characters.forEach(character=>{
        if(character.gender.includes(value))
          filteredValues.push(character)
        else if(character.location.name.includes(value))
          filteredValues.push(character)
        else if(action.payload.episodeurl && character.episode.includes(value)){
          filteredValues.push(character)
        }
      })
      let appliedFilters = state.appliedFilters;
      //if the value from the check box is not empty
      if (value) {
          //check if the filter already exists in the tracking array
          let index = appliedFilters.indexOf(value);
          if (index==-1)
              //if it doesn’t, add it.
              appliedFilters.push(value);
          //change the characters to reflect the change
          newState.filteredCharacters = [...filteredValues,...newState.filteredCharacters];
          newState.filteredCharacters= [...new Set(newState.filteredCharacters)]
          console.log("After adding filter: ",newState.filteredCharacters)
        } else {
            //if the value is empty, we can assume everything has been erased 
            let index = appliedFilters.indexOf(value);
            console.log("name: ",name)
            //in that case, remove the current filter
            console.log("applied filters:",appliedFilters)
            appliedFilters.splice(index, 1);
            newState.filteredCharacters= newState.filteredCharacters.filter(character=>character.gender!=name) 
            console.log("after splice applied filters:",appliedFilters)
            console.log("New state after removing checkbox: ",newState.filteredCharacters)
            if (appliedFilters.length == 0) {
                //if there are no filters applied, reset the products to normal.
                newState.filteredCharacters = [];
            }
          }
      return newState;
    // case 'SET_FILTER_BY_VALUE_GENDER':
    //   let value = action.payload.value;
    //   let filteredValues = state.characters.filter(character => {
    //     //return any character whose gender matches
    //     return character.gender.includes(value);
    // });
    // return {
    //   ...state,
    //   characters: filteredValues,
    // };
    case 'SET_SEARCH_VALUE':
      let newState_SET_SEARCH_VALUE={...state}
      newState_SET_SEARCH_VALUE.searchValue=action.payload.searchValue
      console.log("search character results: ",action.payload.res)
      newState_SET_SEARCH_VALUE.searchResultCharacters=[...action.payload.res.results]
      newState_SET_SEARCH_VALUE.characters=[...action.payload.res.results]
      newState_SET_SEARCH_VALUE.filteredCharacters= newState_SET_SEARCH_VALUE.filteredCharacters.filter(x => newState_SET_SEARCH_VALUE.searchResultCharacters.includes(x))
      console.log("New state after search character results: ",newState_SET_SEARCH_VALUE)
      return newState_SET_SEARCH_VALUE
      // return {
      //   ...state,
      //   searchValue: action.payload,
      // };
    case 'REMOVE_SEARCH_VALUE':
      let newState_REMOVE_SEARCH_VALUE={...state}
      newState_REMOVE_SEARCH_VALUE.searchValue=''
      newState_REMOVE_SEARCH_VALUE.searchResultCharacters=[]
      newState_REMOVE_SEARCH_VALUE.filteredCharacters=[]
      newState_REMOVE_SEARCH_VALUE.appliedFilters=[]
      newState_REMOVE_SEARCH_VALUE.characters=[...action.payload.results]
      console.log("New state after reset from reducers:",newState_REMOVE_SEARCH_VALUE)
      return newState_REMOVE_SEARCH_VALUE
    case 'SORT_ASC':
      function sortAsc(arr, field) {
        return arr.sort(function (a, b) {
            if (a[field] > b[field]) {
                return 1;
            }
            if (b[field]> a[field]) {
                return -1;
            }
            return 0;
        })
      }
      let newState_SORT_ASC={...state}
      // newState_REMOVE_SEARCH_VALUE.searchValue=''
      newState_SORT_ASC.searchResultCharacters= sortAsc(newState_SORT_ASC.searchResultCharacters, `id`)
      newState_SORT_ASC.filteredCharacters= sortAsc(newState_SORT_ASC.filteredCharacters, `id`)
      newState_SORT_ASC.characters= sortAsc(newState_SORT_ASC.characters, `id`)
      return newState_SORT_ASC
    case 'SORT_DESC':
      function sortDesc(arr, field) {
        return arr.sort(function (a, b) {
            if (a[field] > b[field]) {
                return -1;
            }
            if (b[field]> a[field]) {
                return 1;
            }
            return 0;
        })
     }
      let newState_SORT_DESC={...state}
      // newState_REMOVE_SEARCH_VALUE.searchValue=''
      newState_SORT_DESC.searchResultCharacters= sortDesc(newState_SORT_DESC.searchResultCharacters, `id`)
      newState_SORT_DESC.filteredCharacters= sortDesc(newState_SORT_DESC.filteredCharacters, `id`)
      newState_SORT_DESC.characters= sortDesc(newState_SORT_DESC.characters, `id`)
      console.log("desc order for characters in state: ", newState_SORT_DESC.characters)
      return newState_SORT_DESC
    default:
      return state;
  }
};

export default Reducer;
