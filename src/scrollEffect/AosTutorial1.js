import React, { useEffect } from 'react';
import './tutorial.css';
import Aos from "aos";  
import "aos/dist/aos.css";
// import "aos/dist/aos.js";

const AosTutorial1 = () => {

    useEffect(() => {
        Aos.init({
          duration: 1700,
        });

      }, []);

    return (
        <>
            <div className="container">
                <div className="row text-center images mt-5">
                    <div className="col-md-4">
                        <img data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" src="/images/img1.jpg" alt="" />
                    </div>
                    <div className="col-md-4">
                        <img data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" src="/images/img2.jpg" alt="" />
                    </div>
                    <div className="col-md-4">
                        <img data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" src="/images/img3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AosTutorial1;