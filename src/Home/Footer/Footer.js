import React from 'react';

const Footer = () => {
    const date = new Date();
    const getYear = date.getFullYear();
    return (
        <div className='bg-dark text-white p-3 pt-4 text-center'>
            <p>Copy right &copy; {getYear} All right reserved by Borhan</p>
        </div>
    );
};

export default Footer;