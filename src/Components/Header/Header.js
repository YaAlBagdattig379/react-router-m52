import React from 'react';
import './Header.css'
import { NavLink} from 'react-router-dom';
const Header = () => {
    const NavLinkCSS = ({isActive}) =>{
     return{
        fontWeight : isActive ? 'bold' : 'normal',
        fontSize : isActive ? '20px' : '15px',
        color: isActive ? 'green' : "black",
        textDecoration : isActive ? 'none' : 'underline'
     }
    }
    return (
        <div>
            <h1>Welcome to my routing website</h1>
            <nav className='nav'>
                {/* <a href="/">Home</a> // normal exp>>>>... 1
                <a href="/friends">Friends</a>
                <a href="/about">about</a> */}
                  {/*  exp>>>....2 Link usage*/}
                {/* <Link to="/">Home</Link> second 
                <Link to="/friends">Friends</Link>
                <Link to="/about">about</Link> */}
                {/*  exp>>>....3 NavLink usage*/}
                <NavLink style={NavLinkCSS} to="/">Home</NavLink>
                <NavLink style={NavLinkCSS} to="/friends">Friends</NavLink>
                <NavLink style={NavLinkCSS} to="/about">about</NavLink>
            </nav>
        </div>
    );
};

export default Header;