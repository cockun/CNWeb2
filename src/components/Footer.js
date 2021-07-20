
import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom'
export default class Footer extends React.Component {
  render() {
    return (
      <div className="myFooter">
        <div className="partner-logo">
          <div className="container1">
            <div className="logo-carousel">
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="/img/logo-carousel/logo-1.png" alt="BannerShop" />
                </div>
              </div>
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="/img/logo-carousel/logo-2.png" alt="BannerShop" />
                </div>
              </div>
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="/img/logo-carousel/logo-3.png" alt="BannerShop" />
                </div>
              </div>
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="/img/logo-carousel/logo-4.png" alt="BannerShop" />
                </div>
              </div>
              <div className="logo-item">
                <div className="tablecell-inner">
                  <img src="img/logo-carousel/logo-5.png" alt="BannerShop" />
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
                    <Link to="#"><img src="img/footer-logo.png" alt="Footer-Logo" /></Link>
                  </div>
                  <ul>
                    <li>Address: 60-49 Road 11378 New York</li>
                    <li>Phone: +65 11.188.888</li>
                    <li>Email: hello.colorlib@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="col2">
                <div className="footer-widget">
                  <h5>Information</h5>
                  <div className="border">
                    <ul >
                      <li className="info"><Link to="/Contact">About Us</Link></li>
                      <li className="info"><Link to="/Checkout">Checkout</Link></li>
                      <li className="info"><Link to="/Contact">Contact</Link></li>
                    </ul>

                  </div>

                </div>
              </div>
              <div className="col3">
                <div className="footer-widget">
                  <h5>My Account</h5>
                  <ul>
                    <li><Link to="/AccUser">My Account</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Cart">Shopping Cart</Link></li>
                    <li><Link to="/Shop">Shop</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col4">
                <div className="newslatter-item">
                  <h5>Join Our Newsletter Now</h5>
                  <div id="hcard-Nghi-Thiện-Nguyễn" class="vcard">
                    <a class="url fn n" href="http://mdsfone.xyz/home">  <span class="given-name">Nghi</span>
                      <span class="additional-name">Thiện</span>
                      <span class="family-name">Nguyễn</span>
                    </a>
                    <div class="org">HCMUE</div>
                    <a class="email" href="mailto:nguyenthiennghi1@gmail.com">nguyenthiennghi1@gmail.com</a>
                    <div class="adr">
                      <div class="street-address">An Dương Vương</div>
                      <span class="locality">HCM</span>

                      <span class="country-name">Việt Nam</span>

                    </div>
                    <div class="tel">0908714863</div>
                  </div>


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
                    <img src="img/payment-method.png" alt="payment-method" className="picpayment" />
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

