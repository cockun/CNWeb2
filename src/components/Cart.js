import React from 'react'
import BrigdeRouter from './brigdeRouter.js'
import product1 from '../image/product-1.jpg'
import product2 from '../image/product-2.jpg'
import product3 from '../image/product-3.jpg'
import '../css/Cart.css'

function Cart(){
    return(
        <div >
   
            <div className="cartContainerTitle">
                <div className="cartTitle" style={{flex: 3 }}>IMAGE</div>
                <div className="cartTitle" style={{flex: 4}}>PRODUCT NAME</div>
                <div className="cartTitle" style={{flex: 2}}>PRICE</div>
                <div className="cartTitle" style={{flex: 2}}>QUANTITY</div>
                <div className="cartTitle" style={{flex: 2}}>TOTAL</div>
                <div className="cartTitle" style={{flex: 1}}>X</div>
            </div>
            <div className="cartContainer">
                <div className="cartProduct">
                    <div className="cartCenter" style={{flex: 3 }}>
                        <img src={product1} className="cartProductImage" alt="" />
                    </div>
                    <div className="cartProductName cartCenter" style={{flex: 4}}>PRODUCT NAME</div>
                    <div className="cartProductPrice cartCenter" style={{flex: 2}}>PRICE</div>
                    <div className="cartProductQuantity cartCenter" style={{flex: 2}}>
                        <div className="quantityForm">
                            <span className="decreceBtn">-</span>
                            <input type="text" value="1" className="inputBtn" style={{textAlign: 'center'}}/>
                            <span className="increseBtn">+</span>
                        </div>
                    </div>
                    <div className="cartProductTotal cartCenter" style={{flex: 2}}>TOTAL</div>
                    <div className="CartProductDelete cartCenter" style={{flex: 1}}>X</div>
                </div>
                <div className="cartProduct">
                    <div className="cartCenter" style={{flex: 3 }}>
                        <img src={product2} className="cartProductImage" alt="" />
                    </div>
                    <div className="cartProductName cartCenter" style={{flex: 4}}>PRODUCT NAME</div>
                    <div className="cartProductPrice cartCenter" style={{flex: 2}}>PRICE</div>
                    <div className="cartProductQuantity cartCenter" style={{flex: 2}}>
                        <div className="quantityForm">
                            <span className="decreceBtn">-</span>
                            <input type="text" value="1" className="inputBtn" style={{textAlign: 'center'}}/>
                            <span className="increseBtn">+</span>
                        </div>
                    </div>
                    <div className="cartProductTotal cartCenter" style={{flex: 2}}>TOTAL</div>
                    <div className="CartProductDelete cartCenter" style={{flex: 1}}>X</div>
                </div>
                <div className="cartProduct">
                    <div className="cartCenter" style={{flex: 3 }}>
                        <img src={product3} className="cartProductImage" alt="" />
                    </div>
                    <div className="cartProductName cartCenter" style={{flex: 4}}>PRODUCT NAME</div>
                    <div className="cartProductPrice cartCenter" style={{flex: 2}}>PRICE</div>
                    <div className="cartProductQuantity cartCenter" style={{flex: 2}}>
                        <div className="quantityForm">
                            <span className="decreceBtn">-</span>
                            <input type="text" value="1" className="inputBtn" style={{textAlign: 'center'}}/>
                            <span className="increseBtn">+</span>
                        </div>
                    </div>
                    <div className="cartProductTotal cartCenter" style={{flex: 2}}>TOTAL</div>
                    <div className="CartProductDelete cartCenter" style={{flex: 1}}>X</div>
                </div>
            </div>

            <div className="cartCheckoutCont">
                <div className="cartCheckout">
                    <div className="totalCart">
                        <span className="totalCartTitle">TOTAL</span>
                        <span className="totalCartPrice">$240.00</span>
                    </div>
                    <div className="cartCheckoutBtn">THANH TOÁN</div>
                </div>
            </div>
        </div>
    )
}

export default Cart