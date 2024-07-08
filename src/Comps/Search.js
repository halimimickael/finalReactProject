import React, { useState, useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AppContext } from '../context/Context1';
import { Button, Grid, TextField } from '@mui/material';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { seed, setSeed } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSeed(search);
      setSearchTerm(search);
    }
  }, [searchParams, setSeed]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm) {
      setSearchParams({ search: searchTerm });
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
