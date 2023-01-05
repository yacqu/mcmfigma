import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'


import './NavBar.css'



function NavBar() {

    const links = {
        'HOME': '/',
        'ABOUT': '/about',
        'SERVICES': '/services',
        'PROGRAMS': '/programs',
        'CONSTRUCTION': '/construction', 
        'CONTACT': '/contact', 
        'DONATE': '/donate', 
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
    <div className='nav-bar-floating-wrapper'>
        <div className='nav-bar-floating-container'>
            <div className='nav-bar-floating-logo-container'>
                <img className='nav-bar-floating-logo' alt='logo' src='/images/logos/img-main-logo-wide.png' />
            </div>
            <div className='nav-bar-floating-content-container'>
                <nav className='nav-bar-floating-content'>
                    <ul className={`nav-bar-floating-content-list ${isOpen && "open"}`}>
                        {Object.entries(links).map(([key, value]) => (
                            <li className='nav-bar-floating-content-list-item'>
                                <h1 key={key} className='nav-bar-floating-content-list-item-title'>
                                    <NavLink  to={`${value}`} className='nav-bar-floating-content-list-item-link'>
                                        {key}
                                    </NavLink>
                                </h1></li>
                        ))} 
                    </ul>
                    <div
                    className={`nav-bar-floating-content-list-toggle ${isOpen && "open"}`}
                    onClick={() => setIsOpen(!isOpen)}>
                        <div className="bar"></div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    )
}

export default NavBar