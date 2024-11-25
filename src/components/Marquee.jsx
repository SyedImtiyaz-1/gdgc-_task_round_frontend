import React, { useState, useEffect, useRef } from 'react';
import '../styles/Marquee.css';

const Marquee = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const marqueeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                    setHasAnimated(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1
            }
        );

        if (marqueeRef.current) {
            observer.observe(marqueeRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const clients = [
        { 
            id: 1, 
            name: 'Sarah Johnson',
            role: 'CEO, TechCorp',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop',
            testimonial: 'Outstanding service and support! The team went above and beyond our expectations.'
        },
        { 
            id: 2, 
            name: 'Michael Chen',
            role: 'CTO, InnovateLabs',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop',
            testimonial: 'Best decision for our business. Their expertise transformed our operations completely.'
        },
        { 
            id: 3, 
            name: 'Emma Davis',
            role: 'Founder, StartupX',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop',
            testimonial: 'Exceptional quality and attention to detail. They truly understand our vision.'
        },
        { 
            id: 4, 
            name: 'James Wilson',
            role: 'Director, FutureTech',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop',
            testimonial: 'Transformed our operations with innovative solutions and dedicated support.'
        },
        { 
            id: 5, 
            name: 'Lisa Zhang',
            role: 'VP, GlobalTech',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
            testimonial: 'Incredible team and outstanding support. They go above and beyond.'
        },
        { 
            id: 6, 
            name: 'David Brown',
            role: 'CEO, NextGen',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop',
            testimonial: 'Highly recommended! Their expertise has been instrumental in our success.'
        }
    ];

    const renderClientCard = (client, isDuplicate = false) => (
        <div 
            key={isDuplicate ? `duplicate-${client.id}` : client.id} 
            className={`marquee-item ${isVisible ? 'visible' : ''}`}
            style={{
                transitionDelay: `${(isDuplicate ? client.id + 6 : client.id) * 0.1}s`
            }}
        >
            <div className="client-image">
                <img src={client.image} alt={client.name} />
            </div>
            <div className="client-info">
                <h3>{client.name}</h3>
                <p className="client-role">{client.role}</p>
                <p className="client-testimonial">{client.testimonial}</p>
            </div>
        </div>
    );

    return (
        <section className="marquee-section" ref={marqueeRef}>
            <div className="marquee-container">
                <h2 className={`marquee-title ${isVisible ? 'visible' : ''}`}>
                    Trusted by Leading Companies
                </h2>
                
                <div className="marquee-wrapper">
                    <div className={`marquee-track ${isVisible ? 'animate' : ''}`}>
                        <div className="marquee-content">
                            {clients.map(client => renderClientCard(client))}
                        </div>
                        
                        <div className="marquee-content" aria-hidden="true">
                            {clients.map(client => renderClientCard(client, true))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`marquee-stats ${isVisible ? 'visible' : ''}`}>
                <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Client Retention</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Support</span>
                </div>
            </div>
        </section>
    );
};

export default Marquee;