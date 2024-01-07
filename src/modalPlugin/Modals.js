import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import './main.scss';
import AliceCarousel from 'react-alice-carousel';

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img src="/images/img1.jpg" onDragStart={handleDragStart} role="presentation" />,
        <img src="/images/img2.jpg" onDragStart={handleDragStart} role="presentation" />,
        <img src="/images/img3.jpg" onDragStart={handleDragStart} role="presentation" />
    ];

const Modals = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={isOpen}
				videoId="x3e73Qn6NOo"
				onClose={() => setOpen(false)} 
			/>
            <button className="btn-primary" onClick={() => setOpen(true)}>
                VIEW DEMO
            </button>

            <AliceCarousel mouseTracking items={items} /> 
        </>
    );
};

export default Modals;