import React from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import '../css/header.css'

export default function Header (){
    return (
            <header>
                <Link to="/" className="link"><h2 className="header__title">Everest shop</h2></Link>
                <Link to="/cart" className="link"><i className="fa-solid fa-cart-shopping cart__icon"></i></Link>
            </header>
    )
}