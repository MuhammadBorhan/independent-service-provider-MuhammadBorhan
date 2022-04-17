import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ lesson }) => {
    const { name, price, img, desc } = lesson;
    return (
        <div className="col-md-4 g-4">
            <div className='shadow p-2'>
                <img className='img-fluid rounded' src={img} alt="img" />
                <div className='text-center py-2'>
                    <h3>{name}</h3>
                    <p className='fw-bold fs-5'>Amount: ${price}</p>
                    <p>{desc}</p>
                </div>
                <Link className='text-decoration-none' to='/checkout'>
                    <button className='mx-auto d-block fw-bold'>CheckOut</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleService;