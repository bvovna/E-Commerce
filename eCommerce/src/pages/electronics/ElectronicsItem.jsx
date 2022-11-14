import React from "react"

export default function ElectronicsItem({item}){
    return <div className="item__container">
        <img className="item__img" src={item.image}/>
            <i className="fa-regular fa-heart item__favorite"></i>
                <h3 className="item__title">{item.title}</h3>
                <p><i className="fa-solid fa-star item__star"></i> {item.rating.rate}/5 ({item.rating.count})</p>
            <div className="item__info">
                <p className="item__price">Price: {item.price}€</p>
                <button className="item__button">Add to cart</button>
            </div>
        </div>
}