import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/slider/slider1.jpg';
import img2 from '../../images/slider/slider2.jpg';
import img3 from '../../images/slider/slider3.jpg';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img height={500}
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img height={500}
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img height={500}
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;