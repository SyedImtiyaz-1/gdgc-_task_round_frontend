import React from 'react';
import '../styles/Cards.css';

const Cards = () => {
    const cards = [
        {
            id: 1,
            title: 'UNIQUE',
            subtitle: 'BUSINESS SOLUTIONS',
            icon: '↗',
            color: '#E0E0E0',
            link: '#solutions',
            topIcon: '↗',
            cornerIcon: '⚪'
        },
        {
            id: 2,
            title: 'OUR CASE',
            subtitle: 'STUDIES',
            icon: '⚡',
            color: '#FF5722',
            link: '#cases',
            topIcon: '⚡',
            cornerIcon: '⭕'
        },
        {
            id: 3,
            title: '700+',
            subtitle: 'SUCCESSFUL PROJECTS',
            icon: '🏆',
            color: '#FFD54F',
            link: '#projects',
            topIcon: '🏆',
            cornerIcon: '⭐'
        }
    ];

    return (
        <div className="cards-container">
            {cards.map((card) => (
                <div 
                    key={card.id} 
                    className="card" 
                    style={{ backgroundColor: card.color }}
                >
                    <div className="card-inner">
                        <div className="card-header">
                            <div className="card-top-icon">{card.topIcon}</div>
                            <div className="card-corner-icon">{card.cornerIcon}</div>
                        </div>
                        <div className="card-content">
                            <div className="card-title-group">
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-subtitle">{card.subtitle}</p>
                            </div>
                            <a href={card.link} className="learn-more-link">
                                <span>Learn More</span>
                                <span className="arrow-icon">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="card-background">
                        <div className="background-shape"></div>
                        <div className="background-gradient"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;