import React, {useContext} from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { Context } from '../Context';

export default function Header (){

    const {cartItems} = useContext(Context)
    const cartIcon = cartItems.length > 0 ? <i className="fa-solid fa-cart-shopping cart__icon"></i>:
    <i className="fa-solid fa-cart-plus cart__icon"></i>

    return (
            <header>
                <Link to="/" className="link header__first__link">
                    <h2 className="header__title"><i className="fa-solid fa-mountain-sun"></i> 
                     {" "}Everest</h2>
                </Link>
                <ul className="header__nav">
                    <Link className="link" to="/electronics"><li>Electronics</li></Link>
                    <Link className="link" to="/jewelery"><li>Jewelery</li></Link>
                    <Link className="link" to="/mensclothing"><li>Men's clothing</li></Link>
                    <Link className="link" to="/womensclothing"><li>Women's clothing</li></Link>
                </ul>
                <Link to="/cart" className="link two">{cartIcon}</Link>
            </header>
    )
}