import React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


export default function Home(){
    return <div className="home">
        <div className="home__info">
            <h3 className="home__title">WE HAVE<br></br>EVERYTHING</h3>
            <Link className="shop__btn btn" to="/categories">SHOP NOW</Link>
        </div>
    </div>
}