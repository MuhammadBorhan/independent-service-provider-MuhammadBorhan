import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div className='py-5'>
            <div className='text-center'>
                <h1>My Service Tutor</h1>
            </div>
            <div className="container">
                <div className="row">
                    {
                        service.map(lesson => <SingleService key={lesson.id} lesson={lesson}></SingleService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;