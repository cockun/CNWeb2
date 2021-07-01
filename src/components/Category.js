import React from "react";
import Keyboard from "../image/banphim2.jpg";
import Laptop from "../image/laptop2.jpg";
import Phone from "../image/dienthoai2.jpg";
import {Link} from 'react-router-dom';
import "../css/Category.css";

function Category() {
  return (
    <div className="catContainer">
      <div className="catContent">
        <Link to="/Search/Bàn Phím" className="catImgCont">
          <img src={Keyboard} className="catImg" alt="" />
          <div className="catName">Bàn phím </div>
        </Link>
        <Link to="/Search/Laptop" className="catImgCont">
          <img src={Laptop} className="catImg" alt="" />
          <div className="catName">Laptop</div>
        </Link>
        <Link to="/Search/Iphone" className="catImgCont">
          <img src={Phone} className="catImg" alt="" />
          <div className="catName">Điện thoại</div>
        </Link>
      </div>
    </div>
  );
}

export default Category;
