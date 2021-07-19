import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from './Slider.js'
import Category from './Category.js'
import StyleOf from './styleOf.js'
import StyleOf2 from './styleOf2.js'

function Home() {
  return (
    <div className="App">
      
      <Slider />
      <Category />
      <StyleOf />
      <StyleOf2/>

    </div>
  );
}

export default Home;
