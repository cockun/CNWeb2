import "../css/Header.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Shop from "./NewProduct";
import Contact from "./Contact";
import Login from "./Login";
import React, { useState, useEffect } from "react";
import Register from "./Register";
import Checkout from "./Checkout";
import Detail from "./Detail";
import Search from "./Search";
import Bill from "./ReviewBill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { renderRoutes } from "react-router-config";
import {
  faSearch,
  faCartPlus,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter as Router } from "react-router-dom";

function Header({ route }) {
  const [text, setState] = useState("");
  const changeValue = (e) => {
    setState(e.target.value);
  };

  return (
    <Router>
      <div className="Header">
        <div className="intro">
          <div className="introCont">
            <div className="imgCont">
              <img src="/img/logo.png" alt="" />
            </div>
            <div className="inputForm">
              <div className="searchForm">
                <input
                  type="text"
                  className="input"
                  placeholder="Tìm Sản Phẩm"
                  value={text}
                  onChange={changeValue}
                />
                <Link to={`/Search/${text}`} style={{ flex: 1 }}>
                  <button className="button" type="button">
                    <FontAwesomeIcon
                      icon={faSearch}
                      style={{ fontSize: 20, color: "white" }}
                    />
                  </button>
                </Link>
              </div>
            </div>
            <div className="Cart">
              <Link to="/Cart">
                <FontAwesomeIcon
                  icon={faCartPlus}
                  style={{ fontSize: 25, color: "#E7AB3C", marginLeft: 10 }}
                />
              </Link>
              <Link to="/Login">
                <FontAwesomeIcon
                  icon={faSignInAlt}
                  style={{ fontSize: 25, color: "#E7AB3C", marginLeft: 10 }}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="content">
            <Link to="/Home" className="title">
              Trang chủ
            </Link>
            <Link to="/Shop" className="title">
              Sản phẩm
            </Link>
            <Link to="/Cart" className="title">
              Giỏ hàng
            </Link>
            <Link to="/Contact" className="title">
              Chăm sóc khách hàng
            </Link>
            <Link to="/Admin" className="title">
              Xem Đơn Hàng
            </Link>
          </div>
        </div>
        {renderRoutes(route.routes)}
        {/* <Switch>
          <Route path="/Detail/:id" component={Detail}></Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Search/:text" component={Search}></Route>
          <Route path="/Shop">
            <Shop />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Bill">
            <Bill />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Checkout">
            <Checkout />
          </Route>
          <Route path="/Detail">
            <Detail />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default Header;
