import React from 'react'

import product1 from '../image/product-1.jpg'
import '../css/styleOf.css'

function StyleOf(props){
    console.log(props.right);
    return(
        <div className={props.right ? "styleOfRight" : "styleOf" }>
            <a href="#" className={props.right ? "styleImageRight" : "styleImage" }>
            </a>
            <div className="productCont">
                <div className="styleTitle">Product</div>
                <div className="productView">
                    <div className="product">
                        <img src={product1} className="productImg"/>
                        <a href="#"  className="productName">Converse XXX</a>
                        <div className="productPrice">$14.00</div>
                    </div>
                    <div className="product">
                        <img src={product1} className="productImg"/>
                        <a href="#" className="productName">Converse XXX</a>
                        <div className="productPrice">$14.00</div>
                    </div>
                    <div className="product">
                        <img src={product1} className="productImg"/>
                        <a href="#"  className="productName">Converse XXX</a>
                        <div className="productPrice">$14.00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StyleOf