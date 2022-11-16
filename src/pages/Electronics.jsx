import React, {useContext} from "react";
import CategoryItem from "../components/CategoryItem";
import { Context } from "../Context";

export default function Electronics(){

    const {electronicsItems} = useContext(Context)
    const renderItems = electronicsItems.map((item, index) => {
        return (
            <CategoryItem key={index} item={item}/>
        )
    })

    return <div className="items">{renderItems}</div>
}