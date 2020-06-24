import React from "react";
import "../css/Header.css";
import logo from "../image/logo.png";
import search from "../image/search.png";
import cart from "../image/cart.png";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import Cart from './Cart.js';
import Contact from './Contact';
function Header() {
  return (
    <Router>
      <div className="Header">
         <div className="intro">
          <div className="introCont">
            <div className="imgCont">
              <img src={logo} alt=""/>
            </div>
            <div className="inputForm">
              <div className="searchForm">
                <input type="text" className="input" placeholder="Tìm Sản Phẩm" />

                <button className="button" type="button">
                  <img src={search} width={30} height={30} alt="" />
                </button>
              </div>
            </div>
            <div className="Cart">
              <img src={cart} height={30} width={30} alt="" />
              Cart
            </div>
          </div>
        </div> 

        <div className="container">
          <div className="content">
            <Link to="/Home" className="title">HOME</Link>
            <Link to="/Hobnbnmme" className="title">PRODUCT</Link>
            <Link to="/Cart" className="title">CART</Link>
            <Link to="/Contact" className="title">CONTACT</Link>
          </div>
        </div>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
      </div>
      
    </Router>
  );
}

export default Header;
