import React, { useState, useEffect } from "react";
import "../css/Detail.css";
import { callApi } from "../utils/apiCaller";
import { Helper } from "../utils/helper";
import swal from "sweetalert";
function Detail(props) {
  const [data, setData] = useState({});
  const [number,setNumber] = useState(1);
  const {
    match: { params },
  } = props;
  console.log(params);
  useEffect(() => {
    // get by id 
    callApi("products/getSlug/" + params.id, "GET", null).then((res) => {
      setData(res.data.data);
      console.log(res.data.data)
    });
  }, []);

  const addToCart = () => {
    let cartData = JSON.parse(sessionStorage.getItem('myCart'));
    let check =0;
    cartData.map( (item) => {
      if(data.ID === item.ID){
        item.quantity+=number;
        check =1;
        sessionStorage.setItem('myCart',JSON.stringify(cartData));
        swal("", "Thêm vào giỏ hàng thành công", "success")
      } 
    })
    if(check==0){
      cartData.push({...data,quantity: number});
      sessionStorage.setItem('myCart',JSON.stringify(cartData));
      swal("", "Thêm vào giỏ hàng thành công", "success")
    }
  }
  return (
    <div className="DetailContainer">
      <div className="DetailProduct">
        <div className="imgDetailCont">
          <img src={data.IMGSRC} alt="" className="imgDetail"/>
          <span style={{fontWeight: 'bold'}}></span>
        </div>
        <div className="titleDetailProduct">
          <div className="contentTitle">
            <span style={{fontSize: 12, color: '#b2b2b2' , fontWeight: 700 , letterSpacing: 2}}></span>
            <h3 style={{fontSize: 30, color: '#252525' , fontWeight: 700 }}>{data.NAME}</h3>
            <p style={{fontSize: 16, color: '#636363' , fontWeight: 400, lineHeight: '26px', }}>{data.DESCRIPTION}</p>
            <h4 style={{fontSize: 26, color: 'red' , fontWeight: 'bold', lineHeight: '26px', }}>
            {Helper.formatDollar(parseFloat(data.DISCOUNT))}đ
              <span style={{fontSize: 18, color: 'yellow' , fontWeight: 400, textDecorationLine:'line-through', marginLeft: 13 }}>
                {Helper.formatDollar(parseFloat(data.PRICE))}đ</span>
            </h4>
            <div className="detailQuantity"> 
              <span 
                style={{fontSize: 30 ,color: '#b2b2b2',float: 'left' ,lineHeight: '38px',cursor: 'pointer',width: '18px'}}
                onClick={() => {
                  if(number > 1) setNumber(number-1);
                }}
              >-</span>
              <input type="text" value={number} className="inputQuantityDT"/>
              <span 
                style={{fontSize: 22 ,color: '#b2b2b2',float: 'left' ,lineHeight: '38px',cursor: 'pointer',width: '18px'}}
                onClick={() => setNumber(number+1)}
              >
                +</span>
            </div>
            <div className="addtoCartDT">
                <span style={{fontSize: 16 , color: 'white' , fontWeight: 700}} onClick={addToCart}>THÊM VÀO GIỎ HÀNG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
