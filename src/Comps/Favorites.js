import React, { useContext } from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AppContext } from '../context/Context1';

export default function Favorites() {
  const { worker_Favorites_ar, setWorkerFavoritesAr } = useContext(AppContext);

  const toggleFavorite = (item) => {
    setWorkerFavoritesAr(prevFavorites => prevFavorites.filter(favItem => favItem !== item));
  };

  return (
    <Grid container spacing={3}>
      {worker_Favorites_ar.length > 0 ? (
        worker_Favorites_ar.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                image={item.profileImage}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Age: {item.age}
                </Typography>
                <IconButton onClick={() => toggleFavorite(item)}>
                  <FavoriteIcon color="primary" />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="h6" component="p" style={{ margin: '0 auto', padding: '20px' }}>
          No favorites added.
        </Typography>
      )}
    </Grid>
  );
}
