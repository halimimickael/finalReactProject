import React, { useContext } from 'react';
import WorkerItem from './WorkerItem';
import { AppContext } from '../context/Context1';
import { Grid } from '@mui/material';
import Search from './Search';

export default function Home() {
  const { worker_ar } = useContext(AppContext);



  return (
    <div className='list'>
      <div className='listContainer'>
        <Grid container justify="center" style={{ marginTop: '20px' }}>
          <Grid item xs={12} md={6}>
            <div className='titleTable'>  
              <span style={{ color: 'white' }}>List of employees:</span>
              <span style={{ color: 'white' }}>Result: {worker_ar.length !== 0 ? worker_ar.length : 'none students'}</span>
            </div>
          </Grid>
        </Grid>
        <Search />
        <Grid container justify="center" spacing={1}>
          {worker_ar.map(item => (
            <Grid key={item.id} item xs={6} md={4}>
              <WorkerItem item={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
