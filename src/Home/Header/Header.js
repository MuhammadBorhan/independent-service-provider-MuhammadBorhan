import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import logo from '../../images/logo/tutor2.png';

const Header = () => {
    return (
        <div className='bg-dark'>
            <nav className='container d-flex'>
                <div className="logo">
                    <img height={150} src={logo} alt="" />
                </div>
                <div className="menu">
                    <ul>
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