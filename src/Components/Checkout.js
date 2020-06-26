import React from "react";
import "../css/Checkout.css";
import { Helper } from '../ultis/Helper';
import { Link } from "react-router-dom";
function Checkout() {
  const data = JSON.parse(sessionStorage.getItem("myData"));
  console.log(data);
  const total = JSON.parse(sessionStorage.getItem("totalBill"));
  return (
    <div>
      <section className="checkout-section spad">
        <div className="">
          <form action="#" className="checkout-form">
            <div className="containercheckout">
              <div className="colleftcheckout">
                <div className="checkout-content">
                  <Link to="/Login" className="content-btn">
                    Click Here To Login
                  </Link>
                </div>
                <h4 className="billh4"> Biiling Details</h4>
                <div className="rowleft">
                  <div className="col-lg-6">
                    <label for="fir">
                      {" "}
                      Họ và Tên<span>*</span>
                    </label>
                    <input type="text" id="fir" />
                  </div>
                  <div className="col-lg-12">
                    <label for="cun-name">Số chứng minh</label>
                    <input type="text" id="cun-name" />
                  </div>
                  <div className="col-lg-12">
                    <label for="cun">
                      Địa chỉ<span>*</span>
                    </label>
                    <input type="text" id="cun" />
                  </div>
                  <div className="col-lg-12">
                    <label for="street">
                      Số điện thoại<span>*</span>
                    </label>
                    <input type="text" id="street" className="street-first" />
                  </div>
                </div>
              </div>
              {/* --  */}
              <div className="colrightcheckout">
                <div className="checkout-content">
                  <input type="text" placeholder="Enter Your Coupon Code" />
                </div>
                <div className="place-order">
                  <h4 className="billh4r">Your Order</h4>
                  <div className="order-total">
                    <ul className="order-table">
                      <li>
                        Product <span>Total</span>
                      </li>
                      {data.length !==0  && data.map((item, index) => (
                        <li className="fw-normal" key={index}>
                          {item.name} x {item.quantity} <span>{Helper.formatDollar(item.price * item.quantity)}</span>
                        </li>
                      ))}
                      <li className="fw-normal">
                        Subtotal <span>{Helper.formatDollar(total)}</span>
                      </li>
                      <li className="total-price">
                        Total <span>{Helper.formatDollar(total)}</span>
                      </li>
                    </ul>
                    <div className="payment-check">
                      <div className="pc-item">
                        <label for="pc-check">
                          Cheque Payment
                          <input type="checkbox" id="pc-check" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="pc-item">
                        <label for="pc-paypal">
                          Paypal
                          <input type="checkbox" id="pc-paypal" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div className="order-btn">
                      <button type="submit" className="site-btn place-btn">
                        Place Order
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
