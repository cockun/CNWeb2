import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from './Header.js'
import Slider from './Slider.js'
import Category from './Category.js'
import StyleOf from './styleOf.js'

function Home() {
  return (
    <div className="App">
      <Slider />
      <Category />
      <StyleOf />
      <StyleOf right={true}/>

    </div>
  );
}

export default Home;
