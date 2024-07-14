import React, { useContext, useState, useEffect } from 'react';
import { Typography, IconButton, Snackbar, Alert } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import ModalWorkerDetails from './ModalWorkerDetails'; 
import { AppContext } from '../context/Context1';

export default function WorkerItem({ item, isFavoriteItem, index }) {
  const { setWorkerFavoritesAr, worker_Favorites_ar } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setIsFavorite(worker_Favorites_ar.some(favItem => favItem.login.username === item.login.username));
  }, [worker_Favorites_ar, item]);

  const toggleFavorite = (event) => {
    event.stopPropagation();
    setIsFavorite(!isFavorite);

    if (isFavorite) {
      setWorkerFavoritesAr(prevFavorites => prevFavorites.filter(favItem => favItem.login.username !== item.login.username));
      setSnackbarMessage("Worker removed from favorites");
      setSnackbarSeverity('error');
    } else {
      setWorkerFavoritesAr(prevFavorites => [...prevFavorites, item]);
      setSnackbarMessage("Worker added to favorites");
      setSnackbarSeverity('success');
    }

    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <div className='box_worker' onClick={handleOpenModal}>
        <div className='title_card'>
          {item.name.first} {item.name.last}
          <IconButton onClick={(event) => { event.stopPropagation(); toggleFavorite(event); }} className='icon_pos'>
            {isFavorite ? <FavoriteIcon style={{ color: 'white' }} /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
        <div className='title_bis'>
          Gender
        </div>
        <Typography className='class_typo' variant="body2" color="textSecondary" component="p" style={{ textTransform: 'capitalize' }}>
          {item.gender}
        </Typography>
        <div className='title_bis'>
          phone
        </div>
        <Typography className='class_typo' variant="body2" color="textSecondary" component="p">
          {item.phone}
        </Typography>
        <div className='title_bis'>
          Nationality
        </div>
        <img src={`https://flagsapi.com/${item.nat}/shiny/64.png`} alt="Flag" />
        
        {isFavoriteItem ? (
          <Link to={`/favorite/employee/?index=${worker_Favorites_ar.findIndex(favItem => favItem.login.username === item.login.username)}`} style={{ textDecoration: 'none' }}>
            <div>
              click for more info
            </div>
          </Link>
        ) : null}
      </div>

      {!isFavoriteItem ? (
          <ModalWorkerDetails open={openModal} handleCloseModal={handleCloseModal} item={item} />
        ) : null}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
