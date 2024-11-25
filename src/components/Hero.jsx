import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import '../styles/Hero.css';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="hero">
            <div className="hero-main">
                <div className="hero-content">
                    <div className="hero-left">
                        <div className="hero-heading">
                            <h1>
                                <div className={`heading-line ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                                    UNLIMITED
                                </div>
                                <div className={`heading-line ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                                    PRETENTIOUS
                                </div>
                                <div className={`heading-line with-circles ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
                                    <span className="heading-profile">
                                        <img src="./profile1.svg"  className="profile-img" />
                                        <img src="./profile2.svg"  className="profile-img" />
                                        <img src="./profile3.svg"  className="profile-img" />
                                    </span>
                                    <span>IDEAS</span>
                                </div>
                            </h1>
                        </div>
                        
                        <div className={`hero-subtext ${isVisible ? 'visible' : ''}`}>
                            <div className="solution-text">
                                <p>OUR SOLUTIONS</p>
                            </div>
                            <div className="approach-text">
                                <p>WE PROVIDE THE FULL</p>
                                <p>FUNNEL APPROACH</p>
                            </div>
                        </div>

                        <div className={`hero-features ${isVisible ? 'visible' : ''}`}>
                            <div className="play-section">
                                <button className="play-button">
                                    <span className="play-icon">▶</span>
                                </button>
                                <div className="play-text">
                                    <span>Let's See</span>
                                    <span>How We Did It</span>
                                </div>
                            </div>

                            <div className="feature-tags">
                                <span className="feature-tag">WEB ANALYTICS</span>
                                <span className="feature-tag">EMAIL MARKETING</span>
                                <span className="feature-tag">SEO 2.0</span>
                            </div>
                        </div>
                    </div>

                    <div className={`hero-right ${isVisible ? 'visible' : ''}`}>
                        <div className="demo-card">
                            <div className="card-content">
                                <h2>
                                    YOUR
                                    <br />
                                    BUSINESS
                                    <br />
                                    BOOST
                                </h2>
                                <button className="demo-button">
                                    Book Demo Call
                                    <span className="arrow-icon">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-cards-section">
                <Cards />
            </div>

            <div className="hero-background">
                <div className="background-gradient"></div>
                <div className="background-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;