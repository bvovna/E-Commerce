import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Cart from './pages/Cart'
import Categories from './components/Categories'
import Header from './components/Header'
import "./styles.css";
import Electronics from "./pages/Electronics";
import Jewelery from "./pages/Jewelery";
import MensClothing from './pages/MensClothing'
import WomensClothing from './pages/WomensClothing'
import Home from "./pages/Home";

export default function App() {
      return (
          <>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/categories" element={<Categories />}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/electronics" element={<Electronics />}/>
              <Route path="/jewelery" element={<Jewelery />}/>
              <Route path="/mensclothing" element={<MensClothing/>}/>
              <Route path="/womensclothing" element={<WomensClothing/>}/>
            </Routes>
</>
        );
  }
  