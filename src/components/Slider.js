import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../image/hero-1.jpg'
import img2 from '../image/hero-2.jpg'


export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel 
                showIndicators={false}
                showThumbs={false}
                autoPlay={true}
                interval={2500}
                infiniteLoop={true}
                showStatus={false}
            >
                <div>
                    <img src={img1} />
                
                </div>
                <div>
                    <img  src={img2} />
                   
                </div>

            </Carousel>
        );
    }
}