import React from 'react';
import './AboutMe.css';
import image from '../../images/MySelf/myself.png';

const AboutMe = () => {
    return (
        <div className='container py-3'>
            <div className="row">
                <div className="col-12 col-md-6 mx-auto text-center">
                    <div className='border p-2'>
                        <img className='img-fluid' src={image} alt="myimage" />
                        <h3> Muhammad Borhan</h3>
                        <p> <span className='text-info fw-bold fs-5'>My goal: </span> Since I am a computer science student my goal would be to be a good programmer. Gaining my reputation in any IT sector. Lastly, I want to be a serion expert developer.</p>
                        <p> <span className='text-info fw-bold fs-5'>Road to achive my goal: </span> I have never worked so hard before, but no the mission of becoming a programmer, I will leave all kinds of activities and reach my goal with eager interest.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;