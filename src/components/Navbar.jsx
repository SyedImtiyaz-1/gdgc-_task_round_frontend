import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-brand">Oucher</div>
            
            <button className="mobile-menu-btn" onClick={toggleMenu}>
                <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
            </button>

            <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
                <a href="#home" className="nav-link active">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#services" className="nav-link">Services</a>
                <a href="#contact" className="nav-link">Contact</a>
                <button className="cta-button">Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;