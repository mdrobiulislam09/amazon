import React from 'react';
import lofo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='headc'>
            <img src={lofo} alt="" />
            <div className=''>
                <a href="">Home</a>
                <a href="">Details</a>
                <a href="">Offer</a>
                <a href="">contact</a>
            </div>
        </nav>
    );
};

export default Header;