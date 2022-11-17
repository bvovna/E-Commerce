import React, { useContext } from "react"
import { Context } from "../Context"

export default function CartItem({item}){

    const {addToCart, removeFromCart, removeSingleItem} = useContext(Context)

    const roundedPrice = (item.price*item.quantity).toFixed(2)
    

    return <div className="cart__item">
        <img className="cart__img"src={item.image} alt="item image"/>
        <p>{item.title}</p>
        <p>{roundedPrice}€</p>
        <i onClick={() => removeFromCart(item.id)}className="fa-solid fa-trash delete__item"></i>
            <div className="quantity">
                <button onClick={() => removeSingleItem(item.id)}  className="cartAdd">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)} className="cartAdd">+</button>
            </div>
        </div>
}