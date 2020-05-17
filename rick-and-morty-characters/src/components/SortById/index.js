import React, {useContext} from 'react';
import { Context } from './../../Store';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() => ({
    formControl: {
        width: "100%"
    }
  }));

function SortById() {
  const [state, dispatch] = useContext(Context);
    const classes = useStyles();
    const [id, setId] = React.useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleAscOrder = () =>{
    dispatch({ 
      type: 'SORT_ASC'    
    })
  }

  const handleDescOrder = () =>{
    dispatch({ 
      type: 'SORT_DESC' 
    })
  }

  const options= [{name:'Ascending',action:handleAscOrder},{name:'Descending',action:handleDescOrder}]
    return (
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="select-outlined-label">Sort by Id</InputLabel>
        <Select
          labelId="select-outlined-label"
          id="select-outlined"
          value={id}
          onChange={handleChange}
          label="Sort by Id"
        >
        {options.map(option=>{
            return <MenuItem key={option.name} value={option.name} onClick={option.action}>{option.name}</MenuItem>
        })}
        </Select>
      </FormControl>
    );
  }
  
  export default SortById;