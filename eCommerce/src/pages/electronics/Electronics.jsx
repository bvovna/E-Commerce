import React from "react";
import ElectronicsItem from "./ElectronicsItem";

export default function Electronics(props){
    console.log(props.electronicsItems)
    const renderItems = props.electronicsItems.map((item, index) => {
        return (
            <ElectronicsItem key={index} item={item}/>
        )
    })

    return <div className="items">{renderItems}</div>
}