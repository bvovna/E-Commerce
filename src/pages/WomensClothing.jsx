import React, {useContext} from "react";
import CategoryItem from "../components/CategoryItem";
import { Context } from "../Context";

export default function Jewelery(){

    const {womensClothingItems} = useContext(Context)
    const renderItems = womensClothingItems.map((item, index) => {
        return (
            <CategoryItem key={index} item={item}/>
        )
    })

    return <div className="items">{renderItems}</div>
}