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
    else if(name=='Location'){
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
    if(event.target.checked== true){
      if(event.target.name.includes('https')){
        dispatch({ 
          type: 'SET_FILTER_BY_VALUE_GENDER',
          payload:{value:event.target.name,name:event.target.name,episodeurl:event.target.name}    
        })
      }
      else{
        dispatch({ 
          type: 'SET_FILTER_BY_VALUE_GENDER',
          payload:{value:event.target.name,name:event.target.name}    
        })
      }
    }
      else {dispatch({ 
        type: 'SET_FILTER_BY_VALUE_GENDER',
        payload:{value:"",name:event.target.name}    
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