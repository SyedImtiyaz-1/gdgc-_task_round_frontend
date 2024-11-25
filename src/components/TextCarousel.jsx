import React, { useState, useEffect, useRef } from 'react';
import '../styles/TextCarousel.css';

const TextCarousel = () => {
    const words = ['TEAM', 'IDEAS', 'MEMBER'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const [height, setHeight] = useState(0);
    const wordRef = useRef(null);

    useEffect(() => {
        // Get initial height
        if (wordRef.current) {
            setHeight(wordRef.current.offsetHeight);
        }

        const interval = setInterval(() => {
            setIsAnimating(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % words.length);
                setIsAnimating(true);
            }, 500); // Wait for exit animation
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(interval);
    }, []);

    // Update height when window resizes
    useEffect(() => {
        const handleResize = () => {
            if (wordRef.current) {
                setHeight(wordRef.current.offsetHeight);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="text-carousel" style={{ height: `${height}px` }}>
            <div 
                ref={wordRef}
                className={`carousel-word ${isAnimating ? 'slide-in' : 'slide-out'}`}
                key={words[currentIndex]}
            >
                {words[currentIndex]}
                <div className="word-highlight"></div>
            </div>
        </div>
    );
};

export default TextCarousel;