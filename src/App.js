import React from 'react';
import logo from './logo.svg';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from './components/Header.js'
import Slider from './components/Slider.js'
import Category from './components/Category.js'
import StyleOf from './components/styleOf.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Category />
      <StyleOf />
      <StyleOf right={true}/>

    </div>
  );
}

export default App;
