import React from "react"
import { ItemCount } from "../ItemCount/ItemCount"

const ItemListContainer = ( { greeting = 'saludo'} ) => {
    
    return (
    <>
        {greeting}
        <ItemCount stock = {5} inicial = {1}/>
    </>
    )
}

export default ItemListContainer