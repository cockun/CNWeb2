import "../css/Bill.css";
import { callApi } from "../utils/apiCaller";
import React, { useState, useEffect } from "react";
import error from "../image/error.jpg";
import { Helper } from "../utils/helper";
function ReviewBill() {
  const [bill, setBill] = useState([]);
  let accountID;
  if (JSON.parse(localStorage.getItem("myAccountInfo")).data) {
    accountID = JSON.parse(localStorage.getItem("myAccountInfo")).data.ACCOUNTID;
  } else {
    accountID = "";
  }


  useEffect(() => {

    callApi("bills/filter?ACCOUNTID="+accountID, "GET", null).then((res) => {
      setBill(res.data.data);
    });
  }, []);


  return (
    <div className="containerBill">
      {accountID === "" && (
        <div
          style={{
            fontSize: 30,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div>
            Bạn chưa đăng nhập , Vui lòng đăng nhập để xem lại đơn hàng của
            mình!!!
          </div>
          <img src={error} alt="" />
        </div>
      )}
      {bill.length !== 0 &&
        accountID !== "" &&
        bill.map((item, index) => (
          <div className="BillPre" key={index}>
            <span className="mainTitle">ĐƠN HÀNG</span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "7px",
              }}
            >
              <span className="billTitle">Ngày mua hàng: </span>
              <span className="billTitle">{item.DATEBUY}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "7px",
              }}
            >
              <span className="billTitle">Tên Khách Hàng:</span>
              <span className="billTitle">{item.FULLNAME}</span>
            </div>
            <span className="billTitle">Sản Phẩm:</span>
            <div className="listItemBought">
              {item.BILLINFOS !== 0 &&
                item.BILLINFOS.map((itemB, index) => (
                  
                  <div className="itemBought">
                    <span style={{ maxWidth: 250 }}>

                      {itemB.PRODUCTNAME} x {itemB.QUANTITY}
                    </span>
                    <span>
                      {Helper.formatDollar(
                        parseFloat(itemB.PRICE) * parseFloat(itemB.QUANTITY)
                      )}
                      đ
                    </span>
                  </div>
                ))}
            </div>
            <div className="billStatus">
              <span>Trạng Thái</span>
              <span style={{color:"red"}}>{item.BILLSTATUS}</span>
            </div>
            <div className="reviewBillTotal">
              <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                Thành Tiền:
              </span>
              <span>{Helper.formatDollar(item.TOTAL)}đ</span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ReviewBill;
