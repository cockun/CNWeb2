import React from "react";
import Keyboard from "../image/banphim2.jpg";
import Laptop from "../image/laptop2.jpg";
import Phone from "../image/dienthoai2.jpg";
import "../css/Category.css";

function Category() {
  return (
    <div className="catContainer">
      <div className="catContent">
        <div className="catImgCont">
          <img src={Keyboard} className="catImg" alt="" />
          <div className="catName">Bàn phím </div>
        </div>
        <div className="catImgCont">
          <img src={Laptop} className="catImg" alt="" />
          <div className="catName">Laptop</div>
        </div>
        <div className="catImgCont">
          <img src={Phone} className="catImg" alt="" />
          <div className="catName">Điện thoại</div>
        </div>
      </div>
    </div>
  );
}

export default Category;
