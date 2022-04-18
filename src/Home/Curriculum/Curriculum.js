import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faTableList, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import './Curriculum.css';

const Curriculum = () => {
    return (
        <div className='py-5 curriculum'>
            <h1 className='curriculum-title text-center'>Extra curriculum</h1>
            <div className="container text-center mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <span> <FontAwesomeIcon icon={faSchool} /> </span>
                        <h3>Preparing for EveryWhere</h3>
                        <p>I will make you in such a way that you can realize yourself everywhere. I will make you in such a way that you can realize yourself everywhere.</p>
                    </div>
                    <div className="col-md-4">
                        <span> <FontAwesomeIcon icon={faTableList} /> </span>
                        <h3>Creativity Increase</h3>
                        <p>The think to think about is very important, if you can use your intellect and intellect to make anything difficult easy then you are successful.</p>
                    </div>
                    <div className="col-md-4">
                        <span> <FontAwesomeIcon icon={faAddressBook} /> </span>
                        <h3>Representative</h3>
                        <p>Being able to represent is neither easy not difficult. You can represent anything if you let go of your inner fear, weakness and inertia.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Curriculum;