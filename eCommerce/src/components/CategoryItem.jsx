import React, {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from './CartItem'


export default function CategoryItem({item}){

    const {addToCart, cartItems} = useContext(Context)

    return <div className="item__container">
                <img className="item__img" src={item.image}/>
                
                <h3 className="item__title">{item.title}</h3>
                <p><i className="fa-solid fa-star item__star"></i> {item.rating.rate}/5 ({item.rating.count})</p>
                <div className="item__info">
                    <p className="item__price">Price: {item.price}€</p>
                    <button onClick={() => addToCart(item)} className="item__button">Add to cart</button>
                </div>
            </div>
}