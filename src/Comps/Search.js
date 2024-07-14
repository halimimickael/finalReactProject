import { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AppContext } from '../context/Context1';
import { Button, Grid, TextField } from '@mui/material';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setSeed, searchTerm, setSearchTerm } = useContext(AppContext);

  useEffect(() => {
    const company = searchParams.get('company');
    if (company) {
      setSeed(company);
      setSearchTerm(company);
    }
  }, [searchParams, setSearchTerm, setSeed]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm) {
      setSearchParams({ company: searchTerm });
    }
  };

  return (
    <div>
      <Grid item xs={12} md={6}>
        <div className='search_button'>
          <TextField
            label="Search company"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Button variant="contained" onClick={handleSearch} style={{color : 'white', backgroundColor :'rgb(82, 190, 128)'}}>
            Search
          </Button>
        </div>
      </Grid>
    </div>
  );
}

export default Search;
