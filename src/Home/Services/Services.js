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
        <div className='container py-5'>
            <div className='text-center'>
                <h1>Tutor Programs</h1>
            </div>
            <div className="row">
                <div>
                    {
                        service.map(lesson => <SingleService key={lesson.id} lesson={lesson}></SingleService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;