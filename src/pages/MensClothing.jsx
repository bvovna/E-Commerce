import React, {useContext} from "react";
import CategoryItem from "../components/CategoryItem";
import { Context } from "../Context";

export default function Jewelery(){

    const {mensClothingItems} = useContext(Context)
    const renderItems = mensClothingItems.map((item, index) => {
        return (
            <CategoryItem key={index} item={item}/>
        )
    })

    return <div className="items">{renderItems}</div>
}