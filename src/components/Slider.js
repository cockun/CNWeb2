import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../image/hero3.jpg'
import img2 from '../image/hero4.png'
import img3 from '../image/hero4.jpg'


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
                size='1500'
            >
                <div>
                    <img src={img1} alt="" />
                
                </div>
                <div>
                    <img  src={img2} alt="" />
                   
                </div>
                <div>
                    <img  src={img3} alt="" />
                   
                </div>
                

            </Carousel>
        );
    }
}