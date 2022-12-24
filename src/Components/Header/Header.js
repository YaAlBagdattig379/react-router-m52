import React from 'react';
import './Header.css'
import { Link,CustomLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my routing website</h1>
            <nav className='nav'>
                <Link className='link1' to="/">Home</Link>
                <Link className='link2' to={`/friends`}>Friends</Link>
                {/* <a href="/friends">Frien/ads<> */}
                {/* <CustomLink to="/about">About</CustomLink> */}
            </nav>
        </div>
    );
};

export default Header;