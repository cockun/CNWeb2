import React from "react";
import "../Css/Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="intro">
        <div className="introCont">
          <div className="imgCont">
            <img src="/img/logo.png" />
          </div>
          <div className="inputForm">
            <div className="searchForm">
              <input type="text" className="input" placeholder="Tìm Sản Phẩm" />

              <button className="button" type="button">
                <img src="/img/logo.png" width={30} height={30} />
              </button>
            </div>
          </div>
          <div className="Cart">
            <img src="/img/logo.png" height={30} width={30} />
            Cart
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="title">HOME</div>
          <div className="title">PRODUCT</div>
          <div className="title">CART</div>
          <div className="title">CONTACT</div>
        </div>
      </div>
    </div>
  );
}

export default Header;