import React from 'react'

import { Helper } from "../utils/helper";
import '../css/styleOf.css'
import {Link} from 'react-router-dom'
import { callApi } from '../utils/apiCaller';

export default class styleOf2 extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
        data: [] ,
    };
  }
  componentDidMount() {
    
    
    const coc =
      {
      "data":
      
        {
           // chọn 8 sản phẩm 1 trang cột SOLD với đk tăng dần
          "ORDERBYNAME": false,
          "ORDERBYASC":"SOLD",
          "PAGEINDEX": 1,
          "PAGESIZE": 8
  
        }
      
      }
      const obj = JSON.stringify(coc);   
    callApi('products/filter','GET',obj).then((res) => {
       const data = res.data.data;
       const a = data.splice(6,4)
       console.log(a);
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
                              <Link to={`/Detail/${item.ID}`}>
                              <div className="containerhome1">
                                <div  className="pic">
                                <img src={item.IMGSRC} alt="" className="pi-pic"  />
                                  </div>
                             <div className="text">
                            <div className="textname">
                            {item.NAME}

                            </div>
                            <div className="textprice">
                            {Helper.formatDollar(item.DISCOUNT)}đ
                            <span style={{fontSize: 18, color: 'black' , fontWeight: 400, textDecorationLine:'line-through', marginLeft: 63  }}>
                {Helper.formatDollar(parseFloat(item.PRICE))}đ</span>
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
