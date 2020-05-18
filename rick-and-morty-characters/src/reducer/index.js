const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      let newState_SET_CHARACTERS={...state}
      newState_SET_CHARACTERS.characters=[...action.payload.results];
      console.log("newState_SET_CHARACTERS",newState_SET_CHARACTERS)
      return newState_SET_CHARACTERS;
    case 'SET_FILTER_BY_VALUE_GENDER':
      const filterCategory = action.payload.categoryNumber;
      console.log("filterCategory number: ",filterCategory)
      let newState_SET_FILTER_BY_VALUE_GENDER = {...state};
      let value = action.payload.value;
      let name = action.payload.name;
      let filteredValues=[];
      // let characterChek;
      let exclusivecharacterChek = state.filteredCharacters.length>0?state.filteredCharacters:state.characters;
      // console.log("characterCheck after filter",characterChek)
      // characterChek.forEach(character=>{
      //   if(character.gender.includes(value))
      //     filteredValues.push(character)
      //   else if(character.location.name.includes(value))
      //     filteredValues.push(character)
      //   else if(action.payload.episodeurl && character.episode.includes(value)){
      //     filteredValues.push(character)
      //   }
      // })
      // console.log("filteredValues afer filtercheck",filteredValues)
      let appliedFilters = state.appliedFilters;
      //if the value from the check box is not empty
      if (value) {
          //check if the filter already exists in the tracking array
          let index = appliedFilters[filterCategory].indexOf(value);
          if (index==-1)
              //if it doesn’t, add it.
              appliedFilters[filterCategory].push(value);
          let inclusiveCharacterChek;
          if(appliedFilters[filterCategory].length==1)
            inclusiveCharacterChek = exclusivecharacterChek;
          else
            inclusiveCharacterChek = state.characters;
          console.log("inclusive characterCheck after filter", inclusiveCharacterChek)
          inclusiveCharacterChek.forEach(character=>{
            // if(character.gender.includes(value))
            if(appliedFilters[filterCategory].includes(character.gender))
              filteredValues.push(character)
            // else if(character.location.name.includes(value))
            else if(appliedFilters[filterCategory].includes(character.location.name))
              filteredValues.push(character)
            // else if(action.payload.episodeurl && character.episode.includes(value)){
            // else if(action.payload.episodeurl && appliedFilters[filterCategory].includes(character.episode)){
            else if(action.payload.episodeurl && appliedFilters[filterCategory].some(categoryName=>character.episode.includes(categoryName))){
              filteredValues.push(character)
            }
          })
          console.log("filteredValues afer filtercheck",filteredValues)
            //change the characters to reflect the change
          newState_SET_FILTER_BY_VALUE_GENDER.filteredCharacters = filteredValues.filter(x => exclusivecharacterChek.includes(x))
          // newState.filteredCharacters = [...filteredValues,...newState.filteredCharacters];
          // newState.filteredCharacters= [...new Set(newState.filteredCharacters)]
        } else {
            //if the value is empty, we can assume everything has been erased 
            let index = appliedFilters[filterCategory].indexOf(value);
            //in that case, remove the current filter
            appliedFilters[filterCategory].splice(index, 1);
            newState_SET_FILTER_BY_VALUE_GENDER.filteredCharacters= filterCategory==1?newState_SET_FILTER_BY_VALUE_GENDER.filteredCharacters.filter(character=>character.gender!=name) : filterCategory== 0? newState_SET_FILTER_BY_VALUE_GENDER.filteredCharacters.filter(character=>character.location.name!=name): newState_SET_FILTER_BY_VALUE_GENDER.filteredCharacters.filter(character=>character.url!=action.payload.episodeurl)
            if (appliedFilters.length == 0) {
                //if there are no filters applied, reset the products to normal.
                newState_SET_FILTER_BY_VALUE_GENDER.filteredCharacters = [];
            }
          }
      console.log("New state after adding filter: ",newState_SET_FILTER_BY_VALUE_GENDER)
      return newState_SET_FILTER_BY_VALUE_GENDER;
    case 'SET_SEARCH_VALUE':
      let newState_SET_SEARCH_VALUE={...state}
      newState_SET_SEARCH_VALUE.searchValue=action.payload.searchValue
      newState_SET_SEARCH_VALUE.searchResultCharacters=[...action.payload.res.results]
      newState_SET_SEARCH_VALUE.characters=[...action.payload.res.results]
      newState_SET_SEARCH_VALUE.filteredCharacters= newState_SET_SEARCH_VALUE.filteredCharacters.filter(x => newState_SET_SEARCH_VALUE.searchResultCharacters.includes(x))
      return newState_SET_SEARCH_VALUE
    case 'REMOVE_SEARCH_VALUE':
      let newState_REMOVE_SEARCH_VALUE={...state}
      newState_REMOVE_SEARCH_VALUE.searchValue=''
      newState_REMOVE_SEARCH_VALUE.searchResultCharacters=[]
      newState_REMOVE_SEARCH_VALUE.filteredCharacters=[]
      newState_REMOVE_SEARCH_VALUE.appliedFilters=[]
      newState_REMOVE_SEARCH_VALUE.characters=[...action.payload.results]
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
      newState_SORT_DESC.searchResultCharacters= sortDesc(newState_SORT_DESC.searchResultCharacters, `id`)
      newState_SORT_DESC.filteredCharacters= sortDesc(newState_SORT_DESC.filteredCharacters, `id`)
      newState_SORT_DESC.characters= sortDesc(newState_SORT_DESC.characters, `id`)
      return newState_SORT_DESC
    default:
      return state;
  }
};

export default Reducer;
