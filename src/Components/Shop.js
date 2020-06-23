
import React from 'react';
import '../Css/Shop.css';
import Footer from './Footer'
import Header from './Header' 

export default class ShopPage extends React.Component {
  render() {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
          
          <div className="product-shop spad">
          <div className="container4">
              <div className="containerpage">
                  <div className="colleftShop">
                      <div className="filter-widget">
                          <h4 className="fw-title">Categories</h4>
                          <ul className="filter-catagories">
                              <li><a href="#">Men</a></li>
                              <li><a href="#">Women</a></li>
                              <li><a href="#">Kids</a></li>
                          </ul>
                      </div>
                      <div className="filter-widget">
                          <h4 className="fw-title">Brand</h4>
                          <div className="fw-brand-check">
                              <div className="bc-item">
                                  <label for="bc-calvin">
                                      Calvin Klein
                                      <input type="checkbox" id="bc-calvin"/>
                                      <span className="checkmark"></span>
                                  </label>
                              </div>
                              <div className="bc-item">
                                  <label for="bc-diesel">
                                      Diesel
                                      <input type="checkbox" id="bc-diesel"/>
                                      <span className="checkmark"></span>
                                  </label>
                              </div>
                              <div className="bc-item">
                                  <label for="bc-polo">
                                      Polo
                                      <input type="checkbox" id="bc-polo"/>
                                      <span className="checkmark"></span>
                                  </label>
                              </div>
                              <div className="bc-item">
                                  <label for="bc-tommy">
                                      Tommy Hilfiger
                                      <input type="checkbox" id="bc-tommy"/>
                                      <span className="checkmark"></span>
                                  </label>
                              </div>
                          </div>
                      </div>
                      <div className="filter-widget">
                          <h4 className="fw-title">Price</h4>
                          <div className="filter-range-wrap">
                              <div className="range-slider">
                                  <div className="price-input">
                                      <input type="text" id="minamount"/>
                                      <input type="text" id="maxamount"/>
                                  </div>
                              </div>
                              <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                  data-min="33" data-max="98">
                                  <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                                  <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                  <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                              </div>
                          </div>
                          <a href="#" className="filter-btn">Filter</a>
                      </div>
                      <div className="filter-widget">
                          <h4 className="fw-title">Color</h4>
                          <div className="fw-color-choose">
                              <div className="cs-item">
                                  <input type="radio" id="cs-black"/>
                                  <label className="cs-black" for="cs-black">Black</label>
                              </div>
                              <div className="cs-item">
                                  <input type="radio" id="cs-violet"/>
                                  <label className="cs-violet" for="cs-violet">Violet</label>
                              </div>
                              <div className="cs-item">
                                  <input type="radio" id="cs-blue"/>
                                  <label className="cs-blue" for="cs-blue">Blue</label>
                              </div>
                              <div className="cs-item">
                                  <input type="radio" id="cs-yellow"/>
                                  <label className="cs-yellow" for="cs-yellow">Yellow</label>
                              </div>
                              <div className="cs-item">
                                  <input type="radio" id="cs-red"/>
                                  <label className="cs-red" for="cs-red">Red</label>
                              </div>
                              <div className="cs-item">
                                  <input type="radio" id="cs-green"/>
                                  <label className="cs-green" for="cs-green">Green</label>
                              </div>
                          </div>
                      </div>
                      <div className="filter-widget">
                          <h4 className="fw-title">Size</h4>
                          <div className="fw-size-choose">
                              <div className="sc-item">
                                  <input type="radio" id="s-size"/>
                                  <label for="s-size">s</label>
                              </div>
                              <div className="sc-item">
                                  <input type="radio" id="m-size"/>
                                  <label for="m-size">m</label>
                              </div>
                              <div className="sc-item">
                                  <input type="radio" id="l-size"/>
                                  <label for="l-size">l</label>
                              </div>
                              <div className="sc-item">
                                  <input type="radio" id="xs-size"/>
                                  <label for="xs-size">xs</label>
                              </div>
                          </div>
                      </div>
                      <div className="filter-widget">
                          <h4 className="fw-title">Tags</h4>
                          <div className="fw-tags">
                              <a href="#">Towel</a>
                              <a href="#">Shoes</a>
                              <a href="#">Coat</a>
                              <a href="#">Dresses</a>
                              <a href="#">Trousers</a>
                              <a href="#">Men's hats</a>
                              <a href="#">Backpack</a>
                          </div>
                      </div>
                  </div>
                  {/* chia ngay đây */}
                  <div className="colrightShop">
                      <div className="product-show-option">
                          <div className="row">
                              <div className="col-lg-7 col-md-7">
                                  <div className="select-option">
                                      <select className="sorting">
                                          <option value="">Default Sorting</option>
                                      </select>
                                      <select className="p-show">
                                          <option value="">Show:</option>
                                      </select>
                                  </div>
                              </div>
                              
                          </div>
                      </div>
                      <div className="product-list">
                          <div className="productlistcontainer">
                              <div className="colproduct">
                                  <div className="product-item">
                                      <div className="pi-pic">
                                          <img src="/img/products/product-1.jpg" alt=""/>
                                          <div className="sale pp-sale">Sale</div>
                                          <div className="icon">
                                              <i className="icon_heart_alt"></i>
                                          </div>
                                          <ul>
                                              
                                              <li className="quick-view"><a href="#">Mua ngay</a></li>
                                             
                                          </ul>
                                      </div>
                                      <div className="pi-text">
                                          <div className="catagory-name">Towel</div>
                                          <a href="#">
                                              <h5>Pure Pineapple</h5>
                                          </a>
                                          <div className="product-price">
                                              $14.00
                                              <span>$35.00</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="colproduct">
                                  <div className="product-item">
                                      <div className="pi-pic">
                                          <img src="/img/products/product-2.jpg" alt=""/>
                                          <div className="icon">
                                              <i className="icon_heart_alt"></i>
                                          </div>
                                          <ul>
                                             
                                              <li className="quick-view"><a href="#">Mua ngay</a></li>
                                           
                                          </ul>
                                      </div>
                                      <div className="pi-text">
                                          <div className="catagory-name">Coat</div>
                                          <a href="#">
                                              <h5>Guangzhou sweater</h5>
                                          </a>
                                          <div className="product-price">
                                              $13.00
                                              <span>$35.00</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="colproduct">
                                  <div className="product-item">
                                      <div className="pi-pic">
                                          <img src="/img/products/product-3.jpg" alt=""/>
                                          <div className="icon">
                                              <i className="icon_heart_alt"></i>
                                          </div>
                                          <ul>
                                              
                                              <li className="quick-view"><a href="#">Mua ngay</a></li>
                                             
                                          </ul>
                                      </div>
                                      <div className="pi-text">
                                          <div className="catagory-name">Shoes</div>
                                          <a href="#">
                                              <h5>Guangzhou sweater</h5>
                                          </a>
                                          <div className="product-price">
                                              $34.00
                                              <span>$35.00</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="colproduct">
                                  <div className="product-item">
                                      <div className="pi-pic">
                                          <img src="/img/products/product-4.jpg" alt=""/>
                                          <div className="icon">
                                              <i className="icon_heart_alt"></i>
                                          </div>
                                          <ul>
                                             
                                              <li className="quick-view"><a href="#">Mua ngay</a></li>
                                              
                                          </ul>
                                      </div>
                                      <div className="pi-text">
                                          <div className="catagory-name">Coat</div>
                                          <a href="#">
                                              <h5>Microfiber Wool Scarf</h5>
                                          </a>
                                          <div className="product-price">
                                              $64.00
                                              <span>$35.00</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="colproduct">
                                  <div className="product-item">
                                      <div className="pi-pic">
                                          <img src="/img/products/product-5.jpg" alt=""/>
                                          <div className="icon">
                                              <i className="icon_heart_alt"></i>
                                          </div>
                                          <ul>
                                             
                                              <li className="quick-view"><a href="#">Mua ngay</a></li>
                                      
                                          </ul>
                                      </div>
                                      <div className="pi-text">
                                          <div className="catagory-name">Shoes</div>
                                          <a href="#">
                                              <h5>Men's Painted Hat</h5>
                                          </a>
                                          <div className="product-price">
                                              $44.00
                                              <span>$35.00</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="colproduct">
                                  <div className="product-item">
                                      <div className="pi-pic">
                                          <img src="/img/products/product-6.jpg" alt=""/>
                                          <div className="icon">
                                              <i className="icon_heart_alt"></i>
                                          </div>
                                          <ul>
                                             
                                              <li className="quick-view"><a href="#">Mua ngay</a></li>
                                       
                                          </ul>
                                      </div>
                                      <div className="pi-text">
                                          <div className="catagory-name">Shoes</div>
                                          <a href="#">
                                              <h5>Converse Shoes</h5>
                                          </a>
                                          <div className="product-price">
                                              $34.00
                                              <span>$35.00</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="colproduct">
                                  <div className="product-item">
                                      <div className="pi-pic">
                                          <img src="/img/products/product-7.jpg" alt=""/>
                                          <div className="sale pp-sale">Sale</div>
                                          <div className="icon">
                                              <i className="icon_heart_alt"></i>
                                          </div>
                                          <ul>
                                              
                                              <li className="quick-view"><a href="#">Mua ngay</a></li>
                                           
                                          </ul>
                                      </div>
                                      <div className="pi-text">
                                          <div className="catagory-name">Towel</div>
                                          <a href="#">
                                              <h5>Pure Pineapple</h5>
                                          </a>
                                          <div className="product-price">
                                              $64.00
                                              <span>$35.00</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="colproduct">
                                  <div className="product-item">
                                      <div className="pi-pic">
                                          <img src="/img/products/product-8.jpg" alt=""/>
                                          <div className="icon">
                                              <i className="icon_heart_alt"></i>
                                          </div>
                                          <ul>
                                            
                                              <li className="quick-view"><a href="#">Mua ngay</a></li>
                                   
                                          </ul>
                                      </div>
                                      <div className="pi-text">
                                          <div className="catagory-name">Coat</div>
                                          <a href="#">
                                              <h5>2 Layer Windbreaker</h5>
                                          </a>
                                          <div className="product-price">
                                              $44.00
                                              <span>$35.00</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="colproduct">
                                  <div className="product-item">
                                      <div className="pi-pic">
                                          <img src="/img/products/product-9.jpg" alt=""/>
                                          <div className="icon">
                                              <i className="icon_heart_alt"></i>
                                          </div>
                                          <ul>
                                             
                                              <li className="quick-view"><a href="#">Mua ngay</a></li>
                                     
                                          </ul>
                                      </div>
                                      <div className="pi-text">
                                          <div className="catagory-name">Shoes</div>
                                          <a href="#">
                                              <h5>Converse Shoes</h5>
                                          </a>
                                          <div className="product-price">
                                              $34.00
                                              <span>$35.00</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="loading-more">
                          <i className="icon_loading"></i>
                          <a href="#">
                              Loading More
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
          
        </div>
        <div>
           <Footer/>
        </div>
        </div>



    );
  }
}

