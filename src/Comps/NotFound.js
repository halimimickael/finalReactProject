import React from 'react';

const NotFound = () => {
    return (
        <div style={{ margin: '0px auto', textAlign: 'center' }}>
            <img src={process.env.PUBLIC_URL + '/404notFound.png'} alt="404 Not Found" style={{ maxWidth: '100%', height: 'auto' }} />
            <h2>Page Not Found</h2>
        </div>
    );
};

export default NotFound;
