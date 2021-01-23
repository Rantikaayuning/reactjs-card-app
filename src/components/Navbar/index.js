import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logor.png'
import '../../assets/css/navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <div>
                <img src={logo} alt='logoran'/>
            </div>
            <ul>
                <li>
                    <Link className='nav-list' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='nav-list' to='/about-me'>About Me</Link>
                </li>
                <li>
                    <Link className='nav-list' to='/bp-card'>Blackpink Card</Link>
                </li>
                <li>
                    <Link className='nav-list' to='/rj-card'>RJ Card</Link>
                </li>
                <li>
                    <Link className='nav-list' to='/contributor'>Contributor</Link>
                </li>
                <li>
                    <Link className='nav-list' to='/counter'>Counter</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;