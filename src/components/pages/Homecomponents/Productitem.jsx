import React from 'react'
import { useCart } from 'react-use-cart'
import { useState } from "react"
import Cart from "../../Cart";
const ProductItem = (props) => {
    const {addItem} = useCart();
   
    return (
    
            <div className="box">
                <div className="img-box">
                    <img src={props.img} alt="" width='100px' height='100px'/>
                    <img src={props.img1} alt="" className='second' width='100px' height='100px'/>
                    <div className="bottom" onClick={()=>addItem(props.products)} >
                        <p>Add to Card</p>
                        <div className="in"   >
                            <i class="fa-solid fa-cart-shopping"  ></i >
                        </div>
                    </div>
                    <div className="box-text">
                    <h6>{props.title}</h6>
                    <h5>{props.price1}$</h5>
                </div>
                </div>
            </div>

       


         


    )
}

export default ProductItem