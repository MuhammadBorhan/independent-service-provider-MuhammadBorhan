import React from 'react';

const SingleService = ({ lesson }) => {
    const { name, price, img } = lesson;
    return (
        <div className="col-md-4 shadow">
            <div>
                <img height={200} src={img} alt="img" />
                <h3>Name: {name}</h3>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default SingleService;