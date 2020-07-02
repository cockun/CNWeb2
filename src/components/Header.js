import { Link } from "react-router-dom";
import "../css/Header.css";
import React, { useState , useEffect } from "react";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { renderRoutes } from "react-router-config";
import {
  faSearch,
  faCartPlus,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";



function Header({ route } ) {
  const [text, setState] = useState("");
  const [name, setName] = useState("");
  
  useEffect(() => {
    setName(JSON.parse(sessionStorage.getItem("myAccount")));
  });

  const changeValue = (e) => {
    setState(e.target.value);
  };

  const logOut = () => {
    sessionStorage.clear();
    sessionStorage.setItem("myAccount", JSON.stringify(""));
    sessionStorage.setItem("myCart", JSON.stringify([]));
    setName(JSON.parse(sessionStorage.getItem("myAccount")));
    swal("Thông báo!", "Đăng xuất thành công", "success");
  };

  return (
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
                style={{ fontSize: 25, color: "#E7AB3C", marginLeft: 20 }}
              />
            </Link>
            <div className="loginContainer">
              <FontAwesomeIcon
                icon={faSignInAlt}
                style={{ fontSize: 25, color: "#E7AB3C" }}
              />
              {name === "" && (
                <div className="lgOrlo">
                  <Link to="/Login"  className="optionLg" >Đăng Nhập</Link>
                  <Link to="/Register" className="optionLg">Đăng Ký</Link>
                </div>
              )}
              {name !== "" && (
                <div className="lgOrlo">
                  <span onClick={logOut} className="optionLg">Đăng Xuất</span>
                  <span>
                    Xin chào {JSON.parse(sessionStorage.getItem("myAccount"))}!
                  </span>
                </div>
             
              )}
            </div>
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
          <Link to="/AccUser" className="title">
            Tài Khoản
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
  );
}

export default Header;
