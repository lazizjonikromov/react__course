import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import './main.scss';

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
        </>
    );
};

export default Modals;