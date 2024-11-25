import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ isScrolled, isAuthenticated, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSignIn = () => {
        navigate('/signin');
        setIsMenuOpen(false);
    };

    const handleLogout = () => {
        onLogout();
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <div className="logo-icon">O</div>
                    <span className="logo-text">OUCHER</span>
                </Link>

                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <div className="nav-links">
                        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                        <Link to="/#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            Services
                        </Link>
                        <Link to="/#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            About Us
                        </Link>
                        <Link to="/#cases" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                            Cases
                        </Link>
                    </div>

                    <div className="auth-buttons">
                        {isAuthenticated ? (
                            <div className="user-menu">
                                <div className="user-info">
                                    <img src="/profile1.svg" alt="Profile" className="profile-icon" />
                                    <span className="user-name">{user.username}</span>
                                    <button className="logout-button" onClick={handleLogout}>
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button className="sign-in-button" onClick={handleSignIn}>
                                Sign In
                                <span className="button-arrow">→</span>
                            </button>
                        )}
                    </div>
                </div>

                <button 
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                </button>
            </div>

            {/* Mobile menu overlay */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
        </nav>
    );
};

export default Navbar;