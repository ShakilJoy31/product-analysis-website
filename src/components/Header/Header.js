import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
    return (
        <div className='header-element'>
            <Link to='home'>Home</Link>
            <Link to='review'>Review</Link>
            <Link to='dashboard'>Dash Board</Link>
            <Link to='blogs'>Blogs</Link>
            <Link to='about'>About Us</Link>
        </div>
    );
};

export default Header;