import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import image1 from './images/img1.jpg';
import image2 from './images/img2.jpg';
import image3 from './images/img3.jpg';

const LazyLoadImg = () => {

    const styleImg = {
        width: '75%'
    }

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-start mt-5">
                    <div className="col-md-5">
                        <LazyLoadImage src={image1} style={styleImg} effect='blur' delayTime="1500"/>
                    </div>
                </div>

                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-5">
                        <LazyLoadImage src={image2} style={styleImg} effect='blur' delayTime="1500"/>
                    </div>
                </div>

                <div className="row d-flex justify-content-end mt-5">
                    <div className="col-md-5">
                        <LazyLoadImage src={image3} style={styleImg} effect='blur' delayTime="1500"/>
                    </div>
                </div>

                <div className="row d-flex justify-content-start mt-5">
                    <div className="col-md-5">
                        <LazyLoadImage src={image1} style={styleImg} effect='blur' delayTime="1500"/>
                    </div>
                </div>

                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-5">
                        <LazyLoadImage src={image2} style={styleImg} effect='blur' delayTime="1500"/>
                    </div>
                </div>

                <div className="row d-flex justify-content-end mt-5">
                    <div className="col-md-5">
                        <LazyLoadImage src={image3} style={styleImg} effect='blur' delayTime="1500"/>
                    </div>
                </div>

                <div className="row d-flex justify-content-start mt-5">
                    <div className="col-md-5">
                        <LazyLoadImage src={image1} style={styleImg} effect='blur' delayTime="1500"/>
                    </div>
                </div>

                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-5">
                        <LazyLoadImage src={image2} style={styleImg} effect='blur' delayTime="1500"/>
                    </div>
                </div>

                <div className="row d-flex justify-content-end mt-5">
                    <div className="col-md-5">
                        <LazyLoadImage src={image3} style={styleImg} effect='blur' delayTime="1500"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LazyLoadImg;