import React, {useState, useEffect, useContext} from 'react';
import { Context } from './../../Store';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { getLocations, getEpisodes } from './../../services/rickandmortyService';
import {FilterCard,Title} from './FilterStyle';

function Filter({ name }) {
  const [state, dispatch] = useContext(Context);
  const [items, setItems] = useState([]);

  useEffect(()=>{
    if(name=='Gender'){
      setItems([
        {name:"Male", property:false},
        {name:"Female", property:false},
        {name:"unknown", property:false}
      ]);
    }
    else if(name=='Last Location'){
      getLocations()
      .then((res) =>{
        const newList= res.map(location=>{return {name:location,property:false}} )
        setItems([...items,...newList])
      });
    }
    else if(name=='Episode'){
      getEpisodes()
      .then((res) =>{
        const newList= res.map(episode=>{return {name:episode.episodeName,property:false,episodeurl:episode.episodeurl}} )
        setItems([...items,...newList]);
      });
    }
  },[])
  
  const handleChange = (event) => {
    const dummyArr= [...items];
    for(var i=0;i<dummyArr.length;i++){
      if(dummyArr[i].name==event.target.name || dummyArr[i].episodeurl==event.target.name ){
        dummyArr[i].property=event.target.checked;
        setItems([ ...dummyArr]);
      }
    }
    console.log("event.target",event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.MuiFormLabel-root').querySelector('h3').innerHTML )
    let categoryName=""+ event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.MuiFormLabel-root').querySelector('h3').innerHTML
    console.log("categoryName after assigning value from onclick",categoryName)
    let categoryNumber;
    if(categoryName=='Last Location')
      categoryNumber=0
    else if(categoryName=='Gender')
      categoryNumber=1
    else if(categoryName=='Episode')
      categoryNumber=2
    console.log("event.currentTarget",event.currentTarget.parentElement.parentElement.parentElement)
    console.log("categoryNumber after checking which category:",categoryNumber)
    if(event.target.checked== true && categoryNumber in [0,1,2]){
      if(event.target.name.includes('https')){
        dispatch({ 
          type: 'SET_FILTER_BY_VALUE_GENDER',
          payload:{value:event.target.name,name:event.target.name,episodeurl:event.target.name,categoryNumber:categoryNumber}    
        })
      }
      else{
        dispatch({ 
          type: 'SET_FILTER_BY_VALUE_GENDER',
          payload:{value:event.target.name,name:event.target.name,categoryNumber:categoryNumber}    
        })
      }
    }
      else {dispatch({ 
        type: 'SET_FILTER_BY_VALUE_GENDER',
        payload:{value:"",name:event.target.name,categoryNumber:categoryNumber}    
      })}
    }

  return  (
    <FilterCard key={name}>
        <FormControl component="fieldset">
      <FormLabel component="legend"><Title>{name}</Title></FormLabel>
      <FormGroup>
        {items.length>0 && items.map(item=>{
          var x 
          if (item.episodeurl)
          x= (
          <FormControlLabel
          control={<Checkbox checked={item.property} onChange={handleChange} name={item.episodeurl} episodeurl={item.episodeurl} />}
          label={item.name}
        />)
        else
        x=(
        <FormControlLabel
          control={<Checkbox checked={item.property} onChange={handleChange} name={item.name} />}
          label={item.name}
        />)
        return x
        })}
      </FormGroup>
    </FormControl>
    </FilterCard>
    );
  }
  
export default Filter;