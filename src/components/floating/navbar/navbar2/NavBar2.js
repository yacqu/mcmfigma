import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'


import './NavBar2.css'

function NavBar2() {

    const links = {
        'HOME': '/',
        'ABOUT': '/about',
        'SERVICES': '/services',
        'PROGRAMS': '/programs',
        'CONSTRUCTION': '/construction', 
        'CONTACT': '/contact', 
        'DONATE': '/donate', 
    }

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <div className='nav-bar-floating-wrapper'>
        <div className='nav-bar-floating-container'>
            <div className='nav-bar-floating-logo-container'>
                <img className='nav-bar-floating-logo' alt='logo' src='/images/logos/img-main-logo-wide.png' />
            </div>

            <div className='nav-bar-floating-content-container'>
                <nav className='nav-bar-floating-content'>
                    <div className='nav-bar-floating-content-btn-container'>
                        <button className='nav-bar-floating-content-btn' onClick={toggleMenu}>
                            <img src='/images/icons/img-menu-icon.svg' className='nav-bar-floating-content-btn-icon' alt='menu' />

                        </button>
                    </div>
                    <ul className='nav-bar-floating-content-list'>
                        {Object.entries(links).map(([key, value]) => (
                            <li className='nav-bar-floating-content-list-item'>
                                <h1 key={key} className='nav-bar-floating-content-list-item-title'>
                                    <NavLink  to={`${value}`} className='nav-bar-floating-content-list-item-link'>
                                        {key}
                                    </NavLink>
                                </h1></li>))} 
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default NavBar2