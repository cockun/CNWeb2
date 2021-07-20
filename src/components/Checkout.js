import React, { useEffect, useState } from "react";
import "../css/Checkout.css";
import { Helper } from "../utils/helper";
import { Link } from "react-router-dom";
import { callApi } from "../utils/apiCaller";
import swal from "sweetalert";
import MoMo from "../image/MoMo.png";
import PayPal from "../image/paypal.png";
var data = [];
var total = 0;
var today = new Date();

export function Checkout(props) {
  const [state, setState] = useState({
    phone: JSON.parse(localStorage.getItem("myAccountInfo")).data.PHONE,
    fullname: JSON.parse(localStorage.getItem("myAccountInfo")).data.FULLNAME,
    address: JSON.parse(localStorage.getItem("myAccountInfo")).data.ADDRESS,
    accountId: JSON.parse(localStorage.getItem("myAccountInfo")).data.ACCOUNTID,
  });
  const [method, setMethod] = useState(true); // true momo , false paypal
  useEffect(() => {
    data = JSON.parse(sessionStorage.getItem("myCart"));

    total = JSON.parse(sessionStorage.getItem("totalBill"));
    setState({ ...state });
  }, []);

  var billInfoReq = [];
  data.map((item) => {
    let tmp = {
      PRODUCTID: item.ID,
      PRODUCTNAME: item.NAME,
      PRICE: item.DISCOUNT,
      QUANTITY: item.quantity,
    };
    billInfoReq.push(tmp);
  });
  const checkoutbill = () => {
    if (state.phone !== "" && state.fullname !== "" && state.address !== "") {
      const req = {
        TOTAL: total,
        DATEBUY: "",
        FULLNAME: state.fullname,
        PHONE: state.phone,
        ADDRESS: state.address,
        ACCOUNTID: state.accountId,
        BILLSTATUS: "1",
        BILLINFOS: billInfoReq,
      };

      console.log(req);
      callApi("bills/add", "POST", req).then((res) => {
        window.location.href = res.data.data;
        sessionStorage.setItem("myCart", JSON.stringify([]));
        sessionStorage.setItem("totalBill", 0);
        //props.history.push("/AccUser");
      });
    } else {
      swal("Thông báo!", "Vui lòng nhập đầy đủ", "error");
    }
  };
  return (
    <div>
      <section className="checkout-section spad">
        <div className="">
          <form action="#" className="checkout-form">
            <div className="containercheckout">
              <div className="colleftcheckout">
                <div className="checkout-content">
                  <Link to="/Login" className="content-btn">
                    Nhấn vào đây để đăng nhập
                  </Link>
                </div>
                <h4 className="billh4"> Chi tiết đơn hàng</h4>
                <div className="rowleft">
                  <div className="col-lg-6">
                    <label htmlFor="fir">
                      Họ và Tên<span>*</span>
                    </label>
                    <input
                      value={state.fullname}
                      type="text"
                      id="fir"
                      onChange={(e) => {
                        setState({ ...state, fullname: e.target.value });
                      }}
                    />
                  </div>

                  <div className="col-lg-12">
                    <label htmlFor="cun">
                      Địa chỉ<span>*</span>
                    </label>
                    <input
                      value={state.address}
                      type="text"
                      onChange={(e) => {
                        setState({ ...state, address: e.target.value });
                      }}
                      id="cun"
                    />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="street">
                      Số điện thoại<span>*</span>
                    </label>
                    <input
                      value={state.phone}
                      type="text"
                      id="phone"
                      className="street-first"
                      onChange={(e) => {
                        setState({ ...state, phone: e.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* --  */}
              <div className="colrightcheckout">
                <div className="checkout-content">
                  <input type="text" placeholder="Enter Your Coupon Code" />
                </div>
                <div className="place-order">
                  <h4 className="billh4r">Đơn hàng của bạn</h4>
                  <div className="order-total">
                    <ul className="order-table">
                      <li>
                        Sản phẩm <span>Tổng cộng</span>
                      </li>
                      {data.length !== 0 &&
                        data.map((item, index) => (
                          <li className="fw-normal" key={index}>
                            {item.NAME} x {item.quantity}{" "}
                            <span>
                              {Helper.formatDollar(
                                item.DISCOUNT * item.quantity
                              )}
                            </span>
                          </li>
                        ))}
                      <li className="fw-normal">
                        Giá trước khi giảm{" "}
                        <span>{Helper.formatDollar(total)}</span>
                      </li>
                      <li className="total-price">
                        Tổng cộng <span>{Helper.formatDollar(total)}</span>
                      </li>
                    </ul>
                    <h3>Thanh Toán Online</h3>
                    <div className="pickPay">
                      <div
                        className={method === true ? "opt activeMethod" : "opt"}
                        onClick={() => setMethod(true)}
                      >
                        <img
                          className="imgPay"
                          src={MoMo}
                          alt="MoMo Payment"
                        ></img>
                      </div>
                      <div
                        className={
                          method === false ? "opt activeMethod" : "opt"
                        }
                        onClick={() => setMethod(false)}
                      >
                        <img
                          className="imgPay"
                          src={PayPal}
                          alt="PayPal Payment"
                        ></img>
                      </div>
                    </div>
                    <div className="order-btn">
                      <button
                        type="button"
                        onClick={checkoutbill}
                        className="site-btn place-btn"
                      >
                        ĐẶT HÀNG
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <div></div>
    </div>
  );
}
export default Checkout;
