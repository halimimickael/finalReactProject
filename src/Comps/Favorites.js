import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import WorkerItem from './WorkerItem';
import { AppContext } from '../context/Context1';

export default function Favorites() {
  const { worker_Favorites_ar, setWorkerFavoritesAr } = useContext(AppContext);

  const toggleFavorite = (item) => {
    setWorkerFavoritesAr(prevFavorites => prevFavorites.filter(favItem => favItem.id !== item.id));
  };

  return (
    <div className='list'>
      {worker_Favorites_ar.length > 0 ? (
        worker_Favorites_ar.map((item) => (
          <WorkerItem key={item.id} item={item} toggleFavorite={toggleFavorite} />
        ))
      ) : (
        <Typography variant="h6" component="p" style={{ margin: '0 auto', padding: '20px' }}>
          No favorites added.
        </Typography>
      )}
    </div>
  );
}
