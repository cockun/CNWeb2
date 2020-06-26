import React from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  sessionStorage.setItem('myCart', JSON.stringify([]))
  return (
    <div className="App">
      <Header />
      <Footer />

    </div>
  );
}

export default App;
