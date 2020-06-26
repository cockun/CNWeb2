import React, { useEffect,useState } from "react";
import "../css/Checkout.css";
import { Helper } from '../ultis/Helper';
import { Link } from "react-router-dom";
import {callApi} from '../ultis/apiCaller';
import swal from 'sweetalert';
var data = [];
var total = 0;
export function Checkout() {
  const [state,setState] = useState({
    phone:'',
    fullname: '',
    address:'',
  });
  useEffect(() => {
    data = JSON.parse(sessionStorage.getItem("myData"));
    total = JSON.parse(sessionStorage.getItem('totalBill'))
    setState({...state})
    
  }, [])
  const checkoutbill = () => {
    if(state.phone!='' || state.fullname!='' || state.address !='')
    {
      callApi('Bill','POST',
    {
      billinfo: data,
      total : total,
    
      fullname:state.fullname,  
      phone:state.phone,
      address:state.address,
      
    });
    swal("Thông báo!", "Đặt hàng thành công", "success");
    }
    else
    {
      swal("Thông báo!", "Vui lòng nhập đầy đủ", "error");
    }
    
  }
  return (
    <div>
      <section className="checkout-section spad">
        <div className="">
          <form action="#" className="checkout-form"  >
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
                    <label htmlFor="fir">

                      Họ và Tên<span>*</span>
                    </label>
                    <input type="text" id="fir" onChange ={(e)=>{
                      setState({...state,fullname:e.target.value})
                    }} />
                  </div>
              
                  <div className="col-lg-12">
                    <label htmlFor="cun">
                      Địa chỉ<span>*</span>
                    </label>
                    <input type="text" onChange ={(e)=>{
                      setState({...state,address:e.target.value})
                    }} id="cun" />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="street">
                      Số điện thoại<span>*</span>
                    </label>
                    <input type="text" id="phone" className="street-first" onChange ={(e)=>{
                      setState({...state,phone:e.target.value})
                    }}/>
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
                      {data.length !== 0 && data.map((item, index) => (
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
                        <label htmlFor="pc-check">
                          Cheque Payment
                          <input type="checkbox" id="pc-check" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="pc-item">
                        <label htmlFor="pc-paypal">
                          Paypal
                          <input type="checkbox" id="pc-paypal" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div className="order-btn">
                      <button type="button" onClick={checkoutbill}  className="site-btn place-btn">
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