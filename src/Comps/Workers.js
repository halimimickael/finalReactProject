import React, { useContext } from 'react';
import { AppContext } from '../context/Context1';
import WorkerItem from './WorkerItem';
import { Grid } from '@mui/material';

export default function Workers() {
  const { seed, worker_ar } = useContext(AppContext); 

  return (
    <div>
      {seed && <h2>Search Results for "{seed}"</h2>}
      <div className='workers_map'>
        {worker_ar.map(item => (
          <Grid key={item.id} item xs={6} md={4}>
            <WorkerItem item={item} />
          </Grid>
        ))}
      </div>
    </div>
  );
}
