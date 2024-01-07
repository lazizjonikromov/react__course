import React from 'react';
import './carousel.scss';
import AliceCarousel from 'react-alice-carousel';

const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img src="/images/img1.jpg" onDragStart={handleDragStart} role="presentation"/>,
        <img src="/images/img2.jpg" onDragStart={handleDragStart} role="presentation"/>,
        <img src="/images/img3.jpg" onDragStart={handleDragStart} role="presentation"/>
    ];

const CarouselAlice = () => {
    return (
        <>
            
            <AliceCarousel autoPlay={true} autoPlayInterval={2000} mouseTracking items={items} />
                   
        </>
    );
};

export default CarouselAlice;