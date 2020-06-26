import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import product1 from "../image/product-1.jpg";
import product2 from "../image/product-2.jpg";
import product3 from "../image/product-3.jpg";
import "../css/Cart.css";
import { Helper } from '../ultis/Helper';
const DATA = [
  {
    id: 1,
    img: product1,
    name: "Ai Là Best Wibu",
    pirce2: 1000000,
    quantity: 1,
  },
  { id: 2, img: product2, name: "Best Nhái", pirce2: 1000000, quantity: 1 },
  { id: 3, img: product3, name: "Best Cóc", pirce2: 1000000, quantity: 1 },
];

function Cart() {
  var total = 0 
  const [data, setData] = useState([]);

  useEffect(() => {

    sessionStorage.setItem("myData", JSON.stringify(DATA));
    setData(JSON.parse(sessionStorage.getItem("myData")));
  }, []);

  const getFinalTotal =  () => {
        let arrItem = JSON.parse(sessionStorage.getItem("myData"));
        arrItem !== null && arrItem.map( (item) => {
          total += item.pirce2*item.quantity;
        })
        sessionStorage.setItem("totalBill", total);
  }
  getFinalTotal() ;
  const deleteItem = (item) => {
    let arrItem = JSON.parse(sessionStorage.getItem("myData"));
    let index = arrItem.findIndex((items) => items.id === item.id);
    arrItem.splice(index, 1);
    sessionStorage.setItem("myData", JSON.stringify(arrItem));
    setData(arrItem);
  };

  const increaseQuantity = (item) => {
    let arrItem = JSON.parse(sessionStorage.getItem("myData"));
    let temp = arrItem.find((items) => items.id === item.id);
    temp.quantity++;
    sessionStorage.setItem("myData", JSON.stringify(arrItem));
    setData(arrItem);
  };

 

  const descreaseQuantity = (item) => {
    if (item.quantity === 1)
        return;
    else{
        let arrItem = JSON.parse(sessionStorage.getItem("myData"));
        let temp = arrItem.find((items) => items.id === item.id);
        temp.quantity--;
        sessionStorage.setItem("myData", JSON.stringify(arrItem));
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
        {data.map((item, index) => (
          <div className="cartProduct" key={index}>
            <div className="cartCenter" style={{ flex: 3 }}>
              <img src={item.img} className="cartProductImage" alt="" />
            </div>
            <div className="cartProductName cartCenter" style={{ flex: 4 }}>
              {item.name}
            </div>
            <div className="cartProductPrice cartCenter" style={{ flex: 2 }}>
              {Helper.formatDollar(item.pirce2)}
            </div>
            <div className="cartProductQuantity cartCenter" style={{ flex: 2 }}>
              <div className="quantityForm">
                <span className="decreceBtn" onClick={ () => descreaseQuantity(item)}>-</span>
                <input
                  type="text"
                  value={item.quantity}
                  className="inputBtn"
                  style={{ textAlign: "center" }}
                />
                <span className="increseBtn" onClick={ () => increaseQuantity(item)}>+</span>
              </div>
            </div>
            <div className="cartProductTotal cartCenter" style={{ flex: 2 }}>
              {Helper.formatDollar(item.pirce2 * item.quantity)}
            </div>
            <button
              className="CartProductDeletecartCenter"
            
              onClick={() => {
                deleteItem(item);
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>

      <div className="cartCheckoutCont">
        <div className="cartCheckout">
          <div className="totalCart">
            <span className="totalCartTitle">TOTAL</span>
            <span className="totalCartPrice">{Helper.formatDollar(total)} (vnđ)</span>
          </div>
          <Link to="/Checkout" className="cartCheckoutBtn">
            THANH TOÁN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
