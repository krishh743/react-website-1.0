import React, {FC, ReactNode, useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';

interface ContinuesCardSliderProps {
    children: ReactNode;
    numCards: number;
    cardWidth: number;
    isBackground?: boolean;
    reverse?: boolean;
}

const ContinuesCardSlider: FC<ContinuesCardSliderProps> = ({
                                                               children,
                                                               numCards,
                                                               cardWidth,
                                                               isBackground = false,
                                                               reverse = false,
                                                           }) => {
    const slideInterval = reverse ? 4500 : 3000;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % numCards);
        }, slideInterval);

        // Immediately start the shifting
        setCurrentIndex((prevIndex) => (prevIndex + 1) % numCards);

        return () => clearInterval(interval);
    }, []);

    return (
        <Container fluid className={`py-4 ${isBackground ? 'bg-gray-200' : ''} overflow-hidden relative`}>
            <div
                className='d-flex overflow-hidden'
                style={{
                    width: `${numCards * cardWidth}px`, // Set the width to accommodate all cards
                    transform: `translateX(-${currentIndex * cardWidth}px)`, // Translate the container to show the current card
                    transition: `transform ${slideInterval / 1000}s linear`, // Smoothly transition the transform property
                }}
            >
                {children}
            </div>
        </Container>
    );
};

export default ContinuesCardSlider;
