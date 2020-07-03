import React from 'react'


import '../css/styleOf.css'
import {Link} from 'react-router-dom'
import { callApi } from '../ultis/apiCaller';

export default class styleOf2 extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
        data: [] ,
    };
  }
  componentDidMount() {
    callApi('Products', 'GET', null).then((res) => {
       const data = res.data;
       const a= data.splice(29,4)
      this.setState({data : a}) ;
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
                  
                    <div className="item">

                    
                      {this.state.data.map( (item) => 
                            <div className="containerhome">
                              <Link to={`/Detail/${item.id}`}>
                              <div className="containerhome1">
                                <div  className="pic">
                                <img src={item.src} alt="" className="pi-pic"  />
                                  </div>
                             <div className="text">
                            <div className="textname">
                            {item.name}

                            </div>
                            <div className="textprice">
                            {item.price}đ
                            </div>
                                </div>
                                
                                
                                
                               </div>
                               </Link>
                            </div>
                      )}
                         
                    </div>
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