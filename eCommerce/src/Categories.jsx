import React from "react"
import './css/categories.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


export default function Categories(props){

    return <div className="categories">
        <Link to="/electronics"className="link"><div className="category">{props.categories[0]}</div></Link>
        <Link to=""className="link"><div className="category">{props.categories[1]}</div></Link>
        <Link to=""className="link"><div className="category">{props.categories[2]}</div></Link>
        <Link to=""className="link"><div className="category">{props.categories[3]}</div></Link>
        </div>
}

