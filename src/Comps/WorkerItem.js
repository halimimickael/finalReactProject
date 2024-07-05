import React, { useContext, useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, IconButton, Snackbar, Alert } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModalItem from './ModalItem'; 
import { AppContext } from '../context/Context1';

export default function WorkerItem({ item }) {
  const { setWorkerFavoritesAr, worker_Favorites_ar } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    console.log(item)
    setIsFavorite(worker_Favorites_ar.some(favItem => favItem.id === item.id));
  }, [worker_Favorites_ar, item]);

  const toggleFavorite = (event) => {
    event.stopPropagation();
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      setWorkerFavoritesAr(prevFavorites => prevFavorites.filter(favItem => favItem.id !== item.id));
      setSnackbarMessage("Worker removed from favorites");
      setSnackbarSeverity('error');
    } else {
      setWorkerFavoritesAr(prevFavorites => [...prevFavorites, item]);
      setSnackbarMessage("Worker added to favorites");
      setSnackbarSeverity('success');
    }
    setSnackbarOpen(true);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Grid item xs={12} sm={12} margin={5}>
      <Card onClick={handleOpenModal} className='card_cursor'>
        <CardContent style={{ padding: 0}}>
          <div className='title_card'>
            <div>
              {item.name.first} {item.name.last}
            </div>
            <IconButton onClick={toggleFavorite}>
              {isFavorite ? <FavoriteIcon style={{ color: 'white' }} /> : <FavoriteBorderIcon />}
            </IconButton>
          </div>
          <CardMedia
            component="img"
            image={item.picture.medium}
            alt={item.name}
          />
          <Typography variant="body2" color="textSecondary" component="p">
            {/* Phone: {item.phone} */}
          </Typography>
        </CardContent>
      </Card>
      <ModalItem open={isOpen} setIsOpen={setIsOpen} />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
}
