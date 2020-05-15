import React from 'react';
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
    const classes = useStyles();
    const options= ['Ascending','Descending']
    const [id, setId] = React.useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };
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
            return <MenuItem key={option} value={option}>{option}</MenuItem>
        })}
        </Select>
      </FormControl>
    );
  }
  
  export default SortById;