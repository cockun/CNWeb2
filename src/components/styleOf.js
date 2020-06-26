import React from 'react'

import product1 from '../image/product-1.jpg'
import '../css/styleOf.css'

function StyleOf(props){
    console.log(props.right);
    return(
        <div className={props.right ? "styleOfRight" : "styleOf" }>
            <div className={props.right ? "styleImageRight" : "styleImage" }>
            </div>
            <div className="productContStyle">
                <div className="styleTitle">Product</div>
                <div className="productViewStyle">
                    <div className="productStyle">
                        <img src={product1} className="productImg" alt=""/>
                        <div   className="productName">Converse XXX</div>
                        <div className="productPrice">$14.00</div>
                    </div>
                    <div className="productStyle">
                        <img src={product1} className="productImg" alt=""/>
                        <div className="productName">Converse XXX</div>
                        <div className="productPrice">$14.00</div>
                    </div>
                    <div className="productStyle">
                        <img src={product1} className="productImg" alt=""/>
                        <div  className="productName">Converse XXX</div>
                        <div className="productPrice">$14.00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StyleOf