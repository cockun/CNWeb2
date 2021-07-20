import React, { useState, useEffect } from "react";
import "../css/Detail.css";
import { callApi } from "../utils/apiCaller";
import { Helper } from "../utils/helper";
import swal from "sweetalert";
import { InlineReactionButtons } from "sharethis-reactjs";
import { InlineShareButtons } from "sharethis-reactjs";
import { StickyShareButtons } from "sharethis-reactjs";
import { InlineFollowButtons } from "sharethis-reactjs";
import MetaTags from "react-meta-tags";
import Helmet from "react-helmet";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

function Detail(props) {
  console.log(window.location.href);
  const [data, setData] = useState({});
  const [number, setNumber] = useState(1);
  const {
    match: { params },
  } = props;
  console.log(props);
  useEffect(() => {
    // get by id
    callApi("products/getSlug/" + params.id, "GET", null).then((res) => {
      setData(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  const addToCart = () => {
    let cartData = JSON.parse(sessionStorage.getItem("myCart"));
    let check = 0;
    cartData.map((item) => {
      if (data.ID === item.ID) {
        item.quantity += number;
        check = 1;
        sessionStorage.setItem("myCart", JSON.stringify(cartData));
        swal("", "Thêm vào giỏ hàng thành công", "success");
      }
    });
    if (check == 0) {
      cartData.push({ ...data, quantity: number });
      sessionStorage.setItem("myCart", JSON.stringify(cartData));
      swal("", "Thêm vào giỏ hàng thành công", "success");
    }
  };
  return (
    <div className="DetailContainer">
     
      <MetaTags>
        <title>{data.NAME}</title>
        <meta name="keywords" content="Điện Thoại ,Laptop, Bàn Phím, Đồ Điện Tử , Công Nghệ , Macbook , Iphone" />
        <meta name="description" content={data.DESCRIPTION} />
        <meta property="og:title" content={data.NAME} />
        <meta property="og:type"  content="website" />
        <meta property="og:image" content={data.IMGSRC} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@flickr" />
        <meta name="twitter:title" content={data.NAME}  />
        <meta name="twitter:description" content={data.DESCRIPTION} />
        <meta name="twitter:image" content={data.IMGSRC} />
      </MetaTags>
      <div className="DetailProduct">
        <div className="imgDetailCont">
          <img src={data.IMGSRC} alt={data.NAME} className="imgDetail" />
          <span style={{ fontWeight: 'bold' }}></span>
        </div>
        <div className="titleDetailProduct">
          <div className="contentTitle">
            <span
              style={{
                fontSize: 12,
                color: "#b2b2b2",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            ></span>
            <h1 style={{ fontSize: 30, color: "#252525", fontWeight: 700 }}>
              {data.NAME}
            </h1>
            <p
              style={{
                fontSize: 16,
                color: "#636363",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              {data.DESCRIPTION}
            </p>
            <h4
              style={{
                fontSize: 26,
                color: "red",
                fontWeight: "bold",
                lineHeight: "26px",
              }}
            >
              {Helper.formatDollar(parseFloat(data.DISCOUNT))}đ
              <span
                style={{
                  fontSize: 18,
                  color: "yellow",
                  fontWeight: 400,
                  textDecorationLine: "line-through",
                  marginLeft: 13,
                }}
              >
                {Helper.formatDollar(parseFloat(data.PRICE))}đ
              </span>
            </h4>
            <div className="detailQuantity">
              <span
                style={{
                  fontSize: 30,
                  color: "#b2b2b2",
                  float: "left",
                  lineHeight: "38px",
                  cursor: "pointer",
                  width: "18px",
                }}
                onClick={() => {
                  if (number > 1) setNumber(number - 1);
                }}
              >
                -
              </span>
              <input type="text" value={number} className="inputQuantityDT" />
              <span
                style={{
                  fontSize: 22,
                  color: "#b2b2b2",
                  float: "left",
                  lineHeight: "38px",
                  cursor: "pointer",
                  width: "18px",
                }}
                onClick={() => setNumber(number + 1)}
              >
                +
              </span>
            </div>
            <div className="addtoCartDT">
              <h3
                style={{ fontSize: 16, color: "white", fontWeight: 700 }}
                onClick={addToCart}
              >
                THÊM VÀO GIỎ HÀNG
              </h3>
            </div>
            <div className="sharePlace">
              <FacebookShareButton
                url={window.location.href}
                quote={data.NAME}
                hashtag={"#mdsFone"}
                title={data.NAME}
                image={data.IMGSRC}
              >
                <FacebookIcon size={32} round /> Facebook
              </FacebookShareButton>

            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
