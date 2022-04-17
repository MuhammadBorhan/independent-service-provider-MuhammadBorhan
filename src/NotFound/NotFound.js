import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='text-center text-danger notfound'>
            <h1 className='fw-bold'>404</h1>
            <h1>Page Not Found</h1>
        </div>
    );
};

export default NotFound;