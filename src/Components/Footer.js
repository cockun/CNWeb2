
import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="partner-logo">
          <div className="container">
            <div className="logo-carousel">
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="/img/logo-carousel/logo-1.png" alt="" />
                </div>
              </div>
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="/img/logo-carousel/logo-2.png" alt="" />
                </div>
              </div>
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="/img/logo-carousel/logo-3.png" alt="" />
                </div>
              </div>
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="/img/logo-carousel/logo-4.png" alt="" />
                </div>
              </div>
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="img/logo-carousel/logo-5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <div className="container2">
            <div className="row2">
              <div className="col1">
                <div className="footer-left">
                  <div className="footer-logo">
                    <a href="#"><img src="img/footer-logo.png" alt="" /></a>
                  </div>
                  <ul>
                    <li>Address: 60-49 Road 11378 New York</li>
                    <li>Phone: +65 11.188.888</li>
                    <li>Email: hello.colorlib@gmail.com</li>
                  </ul>
                  <div className="footer-social">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-pinterest"></i></a>
                  </div>
                </div>
              </div>
              <div className="col2">
                <div className="footer-widget">
                  <h5>Information</h5>
                  <div className="border">
                    <ul >
                      <li className="info"><a href="#">About Us</a></li>
                      <li className="info"><a href="#">Checkout</a></li>
                      <li className="info"><a href="#">Contact</a></li>
                      <li> <a href="#">Serivius</a></li>
                    </ul>

                  </div>

                </div>
              </div>
              <div className="col3">
                <div className="footer-widget">
                  <h5>My Account</h5>
                  <ul>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Shopping Cart</a></li>
                    <li><a href="#">Shop</a></li>
                  </ul>
                </div>
              </div>
              <div className="col4">
                <div className="newslatter-item">
                  <h5>Join Our Newsletter Now</h5>
                  <p>Get E-mail updates about our latest shop and special offers.</p>


                </div>
              </div>
            </div>
          </div>
          <div className="copyright-reserved">
            <div className="container">
              <div className="row2">
                <div className="col5">
                  <div className="copyright-text">
                    Copyright ©2020 All rights reserved | This template is made with  by Colorlib
                                </div>
                  <div className="payment-pic">
                    <img src="img/payment-method.png" alt="" className="picpayment" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

