import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Cart.css";
import { Helper } from "../utils/helper";
import swal from "sweetalert";

function Cart() {
  var total = 0;
  console.log(JSON.parse(localStorage.getItem("myAccountInfo")).data)
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(sessionStorage.getItem("myCart")));
  }, []);

  const getFinalTotal = () => {
    if (data) {
      data.map((item) => {
       return total += item.DISCOUNT * item.quantity;

      });
      sessionStorage.setItem("totalBill", total);
    }
  };
  getFinalTotal();
  const deleteItem = (item) => {
    let arrItem = JSON.parse(sessionStorage.getItem("myCart"));
    let index = arrItem.findIndex((items) => items.ID === item.ID);
    arrItem.splice(index, 1);
    sessionStorage.setItem("myCart", JSON.stringify(arrItem));
    setData(arrItem);
  };

  const increaseQuantity = (item) => {
    let arrItem = JSON.parse(sessionStorage.getItem("myCart"));
    let temp = arrItem.find((items) => items.ID === item.ID);
    temp.quantity++;
    sessionStorage.setItem("myCart", JSON.stringify(arrItem));
    setData(arrItem);
  };

  const descreaseQuantity = (item) => {
    if (item.quantity === 1) return;
    else {
      let arrItem = JSON.parse(sessionStorage.getItem("myCart"));
      let temp = arrItem.find((items) => items.ID === item.ID);
      temp.quantity--;
      sessionStorage.setItem("myCart", JSON.stringify(arrItem));
      setData(arrItem);
    }
  };

  return (
    <div>
      <div className="cartContainerTitle">
        <div className="cartTitle" style={{ flex: 3 }}>
          IMAGE
        </div>
        <div className="cartTitle" style={{ flex: 4 }}>
          PRODUCT NAME
        </div>
        <div className="cartTitle" style={{ flex: 2 }}>
          PRICE
        </div>
        <div className="cartTitle" style={{ flex: 2 }}>
          QUANTITY
        </div>
        <div className="cartTitle" style={{ flex: 2 }}>
          TOTAL
        </div>
        <div className="cartTitle" style={{ flex: 1 }}>
          X
        </div>
      </div>
      <div className="cartContainer">
        {data !== null && data.map((item, index) => (
          <div className="cartProduct" key={index}>
            <div className="cartCenter" style={{ flex: 3 }}>
              <img src={item.IMGSRC} className="cartProductImage" alt="" />
            </div>
            <div className="cartProductName cartCenter" style={{ flex: 4 }}>
              {item.NAME}
            </div>
            <div className="cartProductPrice cartCenter" style={{ flex: 2 }}>
              {Helper.formatDollar(item.DISCOUNT)}
            </div>
            <div className="cartProductQuantity cartCenter" style={{ flex: 2 }}>
              <div className="quantityForm">
                <span
                  className="decreceBtn"
                  onClick={() => descreaseQuantity(item)}
                >
                  -
                </span>
                <input
                  type="text"
                  value={item.quantity}
                  className="inputBtn"
                  style={{ textAlign: "center" }}
                />
                <span
                  className="increseBtn"
                  onClick={() => increaseQuantity(item)}
                >
                  +
                </span>
              </div>
            </div>
            <div className="cartProductTotal cartCenter" style={{ flex: 2 }}>
              {Helper.formatDollar(item.DISCOUNT * item.quantity)}
            </div>
            <div style={{flex:1 , display: 'flex' , justifyContent: 'center'}}>
            <button
              className="CartProductDeletecartCenter"
            
              onClick={() => {
                deleteItem(item);
              }}
            >
              X
            </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cartCheckoutCont">
        <div className="cartCheckout">
          <div className="totalCart">
            <span className="totalCartTitle">TOTAL</span>
            <span className="totalCartPrice">
              {Helper.formatDollar(total)} (vnđ)
            </span>
          </div>
          {JSON.parse(localStorage.getItem("myAccountInfo")).data !== undefined &&
          <Link to="/Checkout" className="cartCheckoutBtn">
            THANH TOÁN
          </Link>
          }
          {JSON.parse(localStorage.getItem("myAccountInfo")).data ===  undefined && 
          
          <Link to="/login" className="cartCheckoutBtn">
            THANH TOÁN 
          </Link>
          }
        </div>
      </div>
    </div>
    //ádsa
  );
}
export default Cart;
