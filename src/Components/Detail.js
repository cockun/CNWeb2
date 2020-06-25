import React from 'react';
import '../Css/Detail.css';

export default class Detail extends React.Component {
  render() {
    return (
     <div>
         
         <section className="product-shop spad page-details">
        <div className="">
            <div className="container-product">
                <div className="col-left-product">
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
                </div>
                <div className="col-right-product">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product-pic-zoom">
                                <img className="product-big-img" src="img/product-single/product-1.jpg" alt=""/>
                                <div className="zoom-icon">
                                    <i className="fa fa-search-plus"></i>
                                </div>
                            </div>
                
                            </div>
                        </div>
                        <div className="colright-2">
                            <div className="product-details">
                                <div className="pd-title">
                                    <span>oranges</span>
                                    <h3>Pure Pineapple</h3>
                                    <a href="#" className="heart-icon"><i className="icon_heart_alt"></i></a>
                                </div>
                                <div className="pd-rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                    <span>(5)</span>
                                </div>
                                <div className="pd-desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor sum dolor
                                        sit amet, consectetur adipisicing elit, sed do mod tempor</p>
                                    <h4>$495.00 <span>629.99</span></h4>
                                </div>
                                <div className="pd-color">
                                    <h6>Color</h6>
                                    <div className="pd-color-choose">
                                        <div className="cc-item">
                                            <input type="radio" id="cc-black"/>
                                            <label for="cc-black"></label>
                                        </div>
                                        <div className="cc-item">
                                            <input type="radio" id="cc-yellow"/>
                                            <label for="cc-yellow" className="cc-yellow"></label>
                                        </div>
                                        <div className="cc-item">
                                            <input type="radio" id="cc-violet"/>
                                            <label for="cc-violet" className="cc-violet"></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="pd-size-choose">
                                    <div className="sc-item">
                                        <input type="radio" id="sm-size"/>
                                        <label for="sm-size">s</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" id="md-size"/>
                                        <label for="md-size">m</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" id="lg-size"/>
                                        <label for="lg-size">l</label>
                                    </div>
                                    <div className="sc-item">
                                        <input type="radio" id="xl-size"/>
                                        <label for="xl-size">xs</label>
                                    </div>
                                </div>
                                <div className="quantity">
                                    <div className="pro-qty">
                                        <input type="text" value="1"/>
                                    </div>
                                    <a href="#" className="primary-btn pd-cart">Add To Cart</a>
                                </div>
                                <ul className="pd-tags">
                                    <li><span>CATEGORIES</span>: More Accessories, Wallets & Cases</li>
                                    <li><span>TAGS</span>: Clothing, T-shirt, Woman</li>
                                </ul>
                                <div className="pd-share">
                                    <div className="p-code">Sku : 00012</div>
                                    <div className="pd-social">
                                        <a href="#"><i className="ti-facebook"></i></a>
                                        <a href="#"><i className="ti-twitter-alt"></i></a>
                                        <a href="#"><i className="ti-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            </section>
            <div>
            <div className="related-products spad">
        <div className="">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Related Products</h2>
                    </div>
                </div>
            </div>
            <div className="productitem">
                <div className="col-lg-3 col-sm-6">
                    <div className="product-item">
                        <div className="pi-pic">
                            <img src="img/products/women-1.jpg" alt=""/>
                            <div className="sale">Sale</div>
                            <div className="icon">
                                <i className="icon_heart_alt"></i>
                            </div>
                            <ul>
                                <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                <li className="quick-view"><a href="#">+ Quick View</a></li>
                                <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                            </ul>
                        </div>
                        <div className="pi-text">
                            <div className="catagory-name">Coat</div>
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
                <div className="col-lg-3 col-sm-6">
                    <div className="product-item">
                        <div className="pi-pic">
                            <img src="img/products/women-2.jpg" alt=""/>
                            <div className="icon">
                                <i className="icon_heart_alt"></i>
                            </div>
                            <ul>
                                <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                <li className="quick-view"><a href="#">+ Quick View</a></li>
                                <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                            </ul>
                        </div>
                        <div className="pi-text">
                            <div className="catagory-name">Shoes</div>
                            <a href="#">
                                <h5>Guangzhou sweater</h5>
                            </a>
                            <div className="product-price">
                                $13.00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="product-item">
                        <div className="pi-pic">
                            <img src="img/products/women-3.jpg" alt=""/>
                            <div className="icon">
                                <i className="icon_heart_alt"></i>
                            </div>
                            <ul>
                                <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                <li className="quick-view"><a href="#">+ Quick View</a></li>
                                <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                            </ul>
                        </div>
                        <div className="pi-text">
                            <div className="catagory-name">Towel</div>
                            <a href="#">
                                <h5>Pure Pineapple</h5>
                            </a>
                            <div className="product-price">
                                $34.00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="product-item">
                        <div className="pi-pic">
                            <img src="img/products/women-4.jpg" alt=""/>
                            <div className="icon">
                                <i className="icon_heart_alt"></i>
                            </div>
                            <ul>
                                <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                <li className="quick-view"><a href="#">+ Quick View</a></li>
                                <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                            </ul>
                        </div>
                        <div className="pi-text">
                            <div className="catagory-name">Towel</div>
                            <a href="#">
                                <h5>Converse Shoes</h5>
                            </a>
                            <div className="product-price">
                                $34.00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                        <div className="pi-pic">
                            <img src="img/products/women-1.jpg" alt=""/>
                            <div className="sale">Sale</div>
                            <div className="icon">
                                <i className="icon_heart_alt"></i>
                            </div>
                            <ul>
                                <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                                <li className="quick-view"><a href="#">+ Quick View</a></li>
                                <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                            </ul>
                        </div>
                        <div className="pi-text">
                            <div className="catagory-name">Coat</div>
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
        </div>
    </div>
            </div>
            
     </div>  
        
    );
  }
}

