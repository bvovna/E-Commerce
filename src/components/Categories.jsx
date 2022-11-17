import React, {useContext} from "react"
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { Context } from "../Context";
import '../css/categories.css'


export default function Categories(){

    const {categories} = useContext(Context)

    const renderCategories = categories.map((category, index) => {
        if(category==="mensclothing"){
            return <Link key={index}to={`/${category}`} className={`${category} link`}><div className="category">Men's clothing</div></Link>
        }
        if(category==="womensclothing"){
            return <Link key={index}to={`/${category}`} className={`link ${category}`}><div className="category">Women's clothing</div></Link>
        }
        return <Link key={index}to={`/${category}`} className={`link ${category}`}><div className="category">{category}</div></Link>
    })

    return <div className="parent__categories">
                <div className="categories">
                    {renderCategories}
                </div>
            </div>
}

