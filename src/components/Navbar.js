import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar-container">
            <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
                <li className="navbar-item">
                    <Link to="/" className="navbar-link" onClick={closeMenu}>
                        <img src="https://shorturl.at/vzEI8" alt="Home" className="home-icon" />
                        Home
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about" className="navbar-link" onClick={closeMenu}>
                        <img src="https://shorturl.at/hsN16" alt="About" className="about-icon" />
                        About
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/gallery" className="navbar-link" onClick={closeMenu}>
                        <img src="https://shorturl.at/aAOT0" alt="Gallery" className="gallery-icon" />
                        Gallery
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/services" className="navbar-link" onClick={closeMenu}>
                        <img src="https://shorturl.at/mnCW2" alt="Services" className="services-icon" />
                        Services
                    </Link>
                </li>
            </ul>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            </div>
        </nav>
    );
}

export default Navbar;
