import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import { AppContext } from '../context/Context1';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Box } from '@mui/material';

export default function MoreInfo() {
    const { worker_Favorites_ar } = useContext(AppContext);
    const location = useLocation();
    const [workerIndex, setWorkerIndex] = useState(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get('index');
        if (id) {
            setWorkerIndex(parseInt(id, 10));
        }
    }, [location.search]);

    let worker = null;
    if (workerIndex !== null && workerIndex >= 0 && workerIndex < worker_Favorites_ar.length) {
        worker = worker_Favorites_ar[workerIndex];
    }

    return (
        <div style={{margin : '100px '}}>
            {worker ? (
                <div>
                    <h2 className='title_bis'>More Info</h2>
                    <img src={worker.picture.large} alt="Worker" />
                    <div className='title_bis'>
                        Name
                    </div>
                    <p> {worker.name.first} {worker.name.last}</p>
                    <div className='title_bis'>
                        Email
                    </div>
                    <p>{worker.email}</p>
                    <div className='title_bis'>
                        Phone
                    </div>
                    <p>{worker.phone}</p>
                    <div className='title_bis'>
                        Cell
                    </div>
                    <p>{worker.cell}</p>
                    <Box mt={2} style={{ height: '300px', width: '100%' }}>
                        <MapContainer
                            center={[worker.location.coordinates.latitude, worker.location.coordinates.longitude]}
                            zoom={13}
                            scrollWheelZoom={false}
                            style={{ height: '100%', width: '100%' }}
                        >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker
                            position={[worker.location.coordinates.latitude, worker.location.coordinates.longitude]}
                        >
                            <Popup>
                            <div>
                                <p>{worker.name.first} lives here happily! c:</p>
                            </div>
                            </Popup>
                        </Marker>
                        </MapContainer>
                    </Box>
                    <div className='title_bis'>
                        Location
                    </div>
                    <p>{worker.location.street.number} {worker.location.street.name}, {worker.location.city}, {worker.location.state}, {worker.location.country}</p>
                    <div className='title_bis'>
                        DOB
                    </div>
                    <p>{new Date(worker.dob.date).toLocaleDateString()}</p>
                    <div className='title_bis'>
                        Registered
                    </div>
                    <p>{new Date(worker.registered.date).toLocaleDateString()}</p>
                </div>
            ) : (
                <p style={{fontSize : '24px'}}>No worker found with the specified index.</p>
            )}
        </div>
    );
}
