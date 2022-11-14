import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Cart from './pages/Cart'
import Categories from './Categories'
import Header from './Header'
import "./styles.css";
import Electronics from "./pages/electronics/Electronics";

export default function App() {
  const [categories, setCategories] = useState([])
  const [allProductsData, setAllProductsData] = useState([])
  
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
      fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(json=>setAllProductsData(json))
    }, [])

    const electronicsItems = allProductsData.filter(item => {
      if(item.category ==="electronics"){
        return item
      }
    })

    
      return (
        <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={<Categories categories={categories}/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/electronics" element={<Electronics electronicsItems={electronicsItems}/>}/>
            </Routes>
        </Router>
        );
  }
  