import React, {useContext} from "react";
import CategoryItem from "../components/CategoryItem";
import { Context } from "../Context";

export default function Jewelery(){

    const {jeweleryItems} = useContext(Context)
    const renderItems = jeweleryItems.map((item, index) => {
        return (
            <CategoryItem key={index} item={item}/>
        )
    })

    return <div className="items">{renderItems}</div>
}