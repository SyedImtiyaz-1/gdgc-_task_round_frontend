import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>Modern Healthcare Solutions for Everyone</h1>
                <p>Experience the future of healthcare with our innovative platform. Connect with top doctors, schedule appointments, and manage your health journey seamlessly.</p>
                
                <div className="hero-buttons">
                    <button className="primary-button">Get Started Now</button>
                    <button className="secondary-button">
                        Learn More 
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                <div className="stats">
                    <div className="stat-item">
                        <h3>500+</h3>
                        <p>Active Doctors</p>
                    </div>
                    <div className="stat-item">
                        <h3>24/7</h3>
                        <p>Support Available</p>
                    </div>
                    <div className="stat-item">
                        <h3>98%</h3>
                        <p>Success Rate</p>
                    </div>
                </div>
            </div>

            <div className="hero-image">
                <div className="image-container">
                    <img src="/hero-doctor.svg" alt="Healthcare Professional" />
                </div>
                <div className="floating-card doctor-card">
                    <div className="card-icon">👨‍⚕️</div>
                    <div className="card-content">
                        <h4>Dr. Sarah Johnson</h4>
                        <p>Cardiologist</p>
                    </div>
                </div>
                <div className="floating-card stats-card">
                    <div className="card-content">
                        <h4>Weekly Progress</h4>
                        <div className="progress-bar">
                            <div className="progress" style={{width: '85%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;