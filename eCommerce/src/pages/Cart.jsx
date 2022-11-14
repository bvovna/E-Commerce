import React, {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"


export default function Cart(){

    const {cartItems} = useContext(Context)
    const cartElements = cartItems.map((item, index) => {
        return <CartItem key={index} item={item}/>
    })
    const totalPrice = cartItems.reduce((total, currentItem) => {      
        total += currentItem.price * currentItem.quantity
        return total
    
    }, 0)

    return <div>
        <div className="cart__elements">
        {cartElements}
        </div>
        <p>Total: {totalPrice.toFixed(2)}</p>
        </div>
}