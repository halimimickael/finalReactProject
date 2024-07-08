import React from 'react';
import { Modal, Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const ModalWorkerDetails = ({ open, handleCloseModal, item }) => {
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxWidth: '95%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '14px',
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyle}>
        <Card>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CardMedia
                component="img"
                height="auto"
                image={item.picture.large}
                alt={`${item.name.first} ${item.name.last}`}
                sx={{ objectFit: 'cover', maxHeight: 300 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.name.title} {item.name.first} {item.name.last}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Gender: {item.gender}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Email: {item.email}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Phone: {item.phone}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Address: {item.location.street.number} {item.location.street.name}, {item.location.city}, {item.location.state} {item.location.postcode}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12}>
              <Box mt={2} style={{ height: '300px', width: '100%' }}>
                <MapContainer
                  center={[item.location.coordinates.latitude, item.location.coordinates.longitude]}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker
                    position={[item.location.coordinates.latitude, item.location.coordinates.longitude]}
                  >
                    <Popup>
                      <div>
                        <p>{item.name.first} lives here happily! c:</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Modal>
  );
};

export default ModalWorkerDetails;