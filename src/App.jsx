import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  // Main content component
  const MainContent = () => (
    <>
      <Hero />
      <Marquee />
      <section id="services" className="section-services">
        <div className="container">
          <div className="section-content">
            {/* Services content */}
          </div>
        </div>
      </section>
      <section id="cases" className="section-cases">
        <div className="container">
          <div className="section-content">
            {/* Cases content */}
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className={`app ${isScrolled ? 'scrolled' : ''}`}>
      <Navbar 
        isScrolled={isScrolled} 
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route 
            path="/signin" 
            element={
              !isAuthenticated ? (
                <SignIn />
              ) : (
                <Navigate to="/" replace state={{ from: location }} />
              )
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;