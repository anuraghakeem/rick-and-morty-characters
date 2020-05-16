import React, {useState, useEffect} from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { getLocations, getEpisodes } from './../../services/rickandmortyService';
import {FilterCard,Title} from './FilterStyle';


function Filter({ name }) {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    if(name=='Gender'){
      setItems([
        {name:"Male", property:false},
        {name:"Female", property:false}
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
        const newList= res.map(episode=>{return {name:episode,property:false}} )
        setItems([...items,...newList])
      });
    }
  },[])
  

  const handleChange = (event) => {
    const dummyArr= [...items];
    for(var i=0;i<dummyArr.length;i++){
      if(dummyArr[i].name==event.target.name){
        dummyArr[i].property=event.target.checked;
        setItems([ ...dummyArr]);
        return
      }
    }
  };

  return  (
    <FilterCard key={name}>
        <FormControl component="fieldset">
      <FormLabel component="legend"><Title>{name}</Title></FormLabel>
      <FormGroup>
        {items.length>0 && items.map(item=>{
          return (<FormControlLabel
          control={<Checkbox checked={item.property} onChange={handleChange} name={item.name} />}
          label={item.name}
        />)
        })}
      </FormGroup>
    </FormControl>
    </FilterCard>
    );
  }
  
export default Filter;