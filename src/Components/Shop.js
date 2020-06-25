import React from "react";
import "../css/Shop.css";
import {Link} from 'react-router-dom'
import { callApi } from '../ultis/apiCaller';

export default class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
        data: [] ,
    };
  }
  componentDidMount() {
    callApi('Products', 'GET', null).then((res) => {
      const data = res.data;
      this.setState({data}) ;
    });
  }
  render() {
    return (
      <div>
        <div>
          <div className="product-shop spad">
            <div className="container4">
              <div className="containerpage">
                <div className="colrightShop">
                  <div className="product-show-option">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="select-option">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-list">
                    <div className="productlistcontainer">
                      {this.state.data.map( (item) => 
                        <div className="colproduct">
                        <div className="product-item">
                          <div className="pi-pic">
                            <img src={item.src} alt="" />
                            <div className="sale pp-sale">Sale</div>
                            <div className="icon">
                              <i className="icon_heart_alt"></i>
                            </div>
                            <ul style={{ textAlign: "center" }}>
                              <li className="quick-view">
                                <Link to="#">Mua ngay</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="pi-text">
                            <div className="catagory-name">Towel</div>
                            <Link to="#">
                              <h5>{item.name}</h5>
                            </Link>
                            <div className="product-price">
                              {item.price}
                              <span>{item.price2}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      )}
                         
                    </div>
                  </div>
                  <div className="loading-more">
                    <i className="icon_loading"></i>
                    <Link to="#">Loading More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    );
  }
}
