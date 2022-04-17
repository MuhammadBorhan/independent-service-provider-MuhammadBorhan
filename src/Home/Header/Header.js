import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import auth from '../../Firebase/Firebase.init';
import logo from '../../images/logo/tutor2.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth)
    }
    return (
        <div className='bg-dark p-2'>
            <nav className='container d-md-flex justify-content-between align-items-center'>
                <div className="col-12 col-md-4">
                    <div className="logo text-center text-lg-start">
                        <Link to='/'>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className=" col-12 col-md-8">
                    <div className="menu mt-3">
                        <ul className='d-md-flex justify-content-end text-center'>
                            <CustomLink className='me-md-4' to='/'>Home</CustomLink>
                            <CustomLink className='me-md-4' to='/checkout'>Check-Out</CustomLink>
                            <CustomLink className='me-md-4' to='/blogs'>Blogs</CustomLink>
                            <CustomLink className='me-md-4' to='/about'>About Me</CustomLink>
                            {
                                user ? <CustomLink onClick={handleLogOut} to=''>Logout</CustomLink> : <CustomLink to='/login'>Log-In</CustomLink>
                            }
                            <CustomLink className='ms-md-4' to='/register'>Register</CustomLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;