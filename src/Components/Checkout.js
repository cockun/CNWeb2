import React from 'react';
import '../Css/Checkout.css';
import Header from './Header';
import Footer from './Footer'
export default class Checkout extends React.Component {
  render() {
    return (
      <div>
        <div>
            <Header/>
        </div>
        <div>

        </div>
        <section className="checkout-section spad">
        <div className="">
            <form action="#" className="checkout-form">
                <div className="containercheckout">
                    <div className="colleftcheckout">
                        <div className="checkout-content">
                            <a href="#" className="content-btn">Click Here To Login</a>
                        </div>
                        <h4 className="billh4"> Biiling Details</h4>
                        <div className="rowleft">
                            <div className="col-lg-6">
                                <label for="fir"> Tài khoản<span>*</span></label>
                                <input type="text" id="fir"/>
                            </div>
                            <div className="col-lg-12">
                                <label for="cun-name">Mật khẩu</label>
                                <input type="text" id="cun-name"/>
                            </div>
                            <div className="col-lg-12">
                                <label for="cun">Địa chỉ<span>*</span></label>
                                <input type="text" id="cun"/>
                            </div>
                            <div className="col-lg-12">
                                <label for="street">Số điện thoại<span>*</span></label>
                                <input type="text" id="street" className="street-first"/>
                                
                            </div>
                            <div className="col-lg-12">
                                <label for="zip">Nhập lại mật khẩu</label>
                                <input type="text" id="zip"/>
                            </div>                                                             
                        </div>
                    </div>
                    {/* --  */}
                    <div className="colrightcheckout">
                        <div className="checkout-content">
                            <input type="text" placeholder="Enter Your Coupon Code"/>
                        </div>
                        <div className="place-order">
                            <h4 className="billh4r">Your Order</h4>
                            <div className="order-total">
                                <ul className="order-table">
                                    <li>Product <span>Total</span></li>
                                    <li className="fw-normal">Combination x 1 <span>$60.00</span></li>
                                    <li className="fw-normal">Combination x 1 <span>$60.00</span></li>
                                    <li className="fw-normal">Combination x 1 <span>$120.00</span></li>
                                    <li className="fw-normal">Subtotal <span>$240.00</span></li>
                                    <li className="total-price">Total <span>$240.00</span></li>
                                </ul>
                                <div className="payment-check">
                                    <div className="pc-item">
                                        <label for="pc-check">
                                            Cheque Payment
                                            <input type="checkbox" id="pc-check"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="pc-item">
                                        <label for="pc-paypal">
                                            Paypal
                                            <input type="checkbox" id="pc-paypal"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="order-btn">
                                    <button type="submit" className="site-btn place-btn">Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
          

        <div>
            <Footer/>
        </div>
      </div>



    );
  }
}

