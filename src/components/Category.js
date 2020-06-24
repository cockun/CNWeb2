import React from "react";
import Men from "../image/banner-1.jpg";
import Women from "../image/banner-2.jpg";
import Kid from "../image/banner-3.jpg";
import "../css/Category.css";

function Category() {
  return (
    <div className="catContainer">
      <div className="catContent">
        <div className="catImgCont">
          <img src={Men} className="catImg" alt="" />
          <div className="catName">Men 's</div>
        </div>
        <div className="catImgCont">
          <img src={Women} className="catImg" alt="" />
          <div className="catName">Women 's</div>
        </div>
        <div className="catImgCont">
          <img src={Kid} className="catImg" alt="" />
          <div className="catName">Kid 's</div>
        </div>
      </div>
    </div>
  );
}

export default Category;
