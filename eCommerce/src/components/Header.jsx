import React from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import '../css/header.css'

export default function Header (){
    return (
            <header>
                <Link to="/" className="link one"><h2 className="header__title">Everest shop</h2></Link>
                <ul className="header__nav">
                    <Link className="link" to="/electronics"><li>Electronics</li></Link>
                    <Link className="link" to="/jewelery"><li>Jewelery</li></Link>
                    <Link className="link" to="/mensclothing"><li>Men's clothing</li></Link>
                    <Link className="link" to="/womensclothing"><li>Women's clothing</li></Link>
                </ul>
                <Link to="/cart" className="link two"><i className="fa-solid fa-cart-shopping cart__icon"></i></Link>
            </header>
    )
}