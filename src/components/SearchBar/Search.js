import React, {useState} from "react";
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = (props) => {
   
    const [searchValue, setSearchValue] = useState('');
    const handleSearchValue = event => {
        setSearchValue(event.target.value);
    }
    const handleSearchResponse = () => {
        props.func(searchValue);
    }
    return (
        <>
            <TextField onChange={handleSearchValue} id="outlined-basic" label="Search a City" variant="outlined" sx={{mt:'110px', ml: '30%', width:'40%'}}/>
            <SearchIcon onClick={handleSearchResponse} sx={{fontSize: '35px', mt:'120px', cursor: 'pointer'}}/>
        </>
    );
};

export default Search;