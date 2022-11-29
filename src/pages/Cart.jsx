import React, {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"


export default function Cart(){
    const [buttonText, setButtonText] = useState("Place Order")

    function placeOrder(){
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    const {cartItems, emptyCart} = useContext(Context)

    const cartElements = cartItems.map((item, index) => {
        return <CartItem key={index} item={item}/>
    })

    const totalPrice = cartItems.reduce((total, currentItem) => {      
        total += currentItem.price * currentItem.quantity
        return total
    
    }, 0)

    const checkout = totalPrice > 0 ?
    <div  className="cart__total">
        <p>Total: {totalPrice.toFixed(2)}€</p>
        <button onClick={placeOrder}className="checkout__btn link">{buttonText}</button>
    </div>: 
        <p className="cart__total">Please add items to your cart</p>
 
    

    return <div className="cart__elements">
            {cartElements}
            {checkout}
        </div>
}