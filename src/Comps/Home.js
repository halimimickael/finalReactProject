import React, { useContext, useEffect } from 'react';
import WorkerItem from './WorkerItem';
import { AppContext } from '../context/Context1';
import { Grid } from '@mui/material';
import Search from './Search';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
  const { worker_ar, setSeed } = useContext(AppContext);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSeed(search);
    }
  }, [searchParams, setSeed]);

  return (
    <div className='home_container'>
      <div className="banner">
        <div className="search_container">
          <Search />
        </div>
      </div>
      <div className='listContainer'>
        <div className='workers_map'>
          {worker_ar.map(item => (
            <Grid key={item.id} item xs={6} md={4}>
              <WorkerItem item={item} />
            </Grid>
          ))}
        </div>
      </div>
    </div>
  );
}
