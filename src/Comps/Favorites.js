import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import WorkerItem from './WorkerItem';
import { AppContext } from '../context/Context1';

export default function Favorites() {
  const { worker_Favorites_ar } = useContext(AppContext);

  return (
    <div className='list'>
      {worker_Favorites_ar.length > 0 ? (
        worker_Favorites_ar.map((item) => (
          <WorkerItem key={item.id} item={item} isFavoriteItem />
        ))
      ) : (
        <Typography variant="h6" component="p" style={{ margin: '0 auto', padding: '20px' }}>
          No favorites added.
        </Typography>
      )}
    </div>
  );
}
