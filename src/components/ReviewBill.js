import "../css/Bill.css";
import { callApi } from "../ultis/apiCaller";
import React, { useState, useEffect } from "react";
import error from '../image/error.jpg'
import { Helper } from "../utils/helper";
function ReviewBill() {
  const [bill, setBill] = useState([]);
  var userName = JSON.parse(sessionStorage.getItem("myAccount"));
  useEffect(() => {
    callApi("Bill/", "GET", null).then((res) => {
      let data = res.data;
      data = data.filter(
        (item) => item.name === JSON.parse(sessionStorage.getItem("myAccount"))
      );
      setBill(data);
    });
  },[]);
  return (
   
    <div className="containerBill">
    {
        (userName === "" && (
            <div style={{fontSize: 30 , display: 'flex' , justifyContent: 'center' , flexDirection: 'column' ,}}>
            <div >
                Bạn chưa đăng nhập , Vui lòng đăng nhập để xem lại đơn hàng của mình!!!
            </div>
             <img src={error} alt=""/>
             </div>
        ))
    }
      { (bill.length !== 0 && userName !== "") &&
        bill.map( (item ,index) => (
          <div className="BillPre" key={index}>
            <span className="mainTitle">ĐƠN HÀNG</span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "7px",
              }}
            >
              <span className="billTitle">Ngày mua hàng: </span>
              <span className="billTitle">{item.date}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "7px",
              }}
            >
              <span className="billTitle">Tên Khách Hàng:</span>
              <span className="billTitle">{item.fullname}</span>
            </div>
            <span className="billTitle">Sản Phẩm:</span>
            <div className="listItemBought">
            {item.billinfo !== 0 && item.billinfo.map((itemB,index) => (
                  <div className="itemBought">
                  <span style={{maxWidth: 250}}>{itemB.name} x {itemB.quantity}</span>
                  <span>{Helper.formatDollar(parseFloat(itemB.pirce2)*parseFloat(itemB.quantity))}đ</span>
                </div>
            ))}
            </div>
            <div className="reviewBillTotal">
              <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                Thành Tiền:
              </span>
              <span>{Helper.formatDollar(item.total)}đ</span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ReviewBill;
