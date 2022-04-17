import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import logo from '../../images/logo/tutor2.png';
import './Header.css';

const Header = () => {
    return (
        <div className='bg-dark p-2'>
            <nav className='container d-flex justify-content-between align-items-center'>
                <div className="logo">
                    <Link to='/'>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="menu mt-3">
                    <ul className='d-flex'>
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/checkout'>Check-Out</CustomLink>
                        <CustomLink to='/blogs'>Blogs</CustomLink>
                        <CustomLink to='/about'>About Me</CustomLink>
                        <CustomLink to='/login'>Log-In</CustomLink>
                        <CustomLink to='/register'>Register</CustomLink>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;