import React from "react";
import "../css/Header.css";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import Shop from './Shop';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Checkout from './Checkout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch  , faCartPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="Header">
      <div className="intro">
        <div className="introCont">
          <div className="imgCont">
            <img src="/img/logo.png" alt="" />
          </div>
          <div className="inputForm">
            <div className="searchForm">
              <input type="text" className="input" placeholder="Tìm Sản Phẩm" />

              <button className="button" type="button">
                <FontAwesomeIcon icon={faSearch} style={{fontSize: 20 , color: 'white'}} />
              </button>
            </div>
          </div>
          <div className="Cart">
            <Link to="/Cart">
              <FontAwesomeIcon icon={faCartPlus} style={{fontSize: 25 , color: '#E7AB3C',marginLeft:10}} />
            </Link>
            <Link to="/Login">
             <FontAwesomeIcon icon={faSignInAlt} style={{fontSize: 25 , color: '#E7AB3C' , marginLeft:10}} />
            </Link>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="content">
          <Link to="/Home" className="title">Trang chủ</Link>
          <Link to="/Shop" className="title">Sản phẩm</Link>
          <Link to="/Cart" className="title">Giỏ hàng</Link>
          <Link to="/Contact" className="title">Chăm sóc khách hàng</Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/Home">
            <Home />
        </Route>
        <Route  path="/Shop">
            <Shop />
        </Route>
        <Route  path="/Contact">
            <Contact />
        </Route>
        <Route  path="/Cart">
            <Cart />
        </Route>
        <Route  path="/Login">
            <Login />
        </Route>
        <Route path="/Register">
            <Register />
        </Route>
        <Route path="/Checkout">
            <Checkout />
        </Route>
      </Switch>
    </div>
  );
}

export default Header;