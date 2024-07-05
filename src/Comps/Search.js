import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Context1';
import { Button, Grid, TextField } from '@mui/material';

function Search() {
  const { seed, setSeed } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm) {
      setSeed(searchTerm); 
      navigate(`/${searchTerm}`); 
    }
  };

  return (
    <div>
      <h2>Search Results for "{seed}"</h2>
      <Grid item xs={12} md={6}>
        <div className='search_button'>
          <TextField
            label="Change company"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ marginBottom: '20px' }}
          />
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </Grid>
    </div>
  );
}

export default Search;
