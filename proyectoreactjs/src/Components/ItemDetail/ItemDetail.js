import React, { useState } from 'react'

import InputCount from '../InputCount/InputCount'
import { ItemCount } from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'

import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({producto}) => {
    const [isItemCount, setIsItemCount] = useState(true)
    const {addToCart} = useCartContext ()

    //función para agregar un producto al carrito que llama a funcion addToCart del CartContext.
    const onAdd = (cant) => {
        addToCart( { ...producto, cant } )
        setIsItemCount(false)
    }

    return (
    <div className='textDetailContainer'>
        <div className="row" >
            <div className="col">
                <img className="photoDetail w-50 rounded" src={producto.photo} alt='img' />
            </div>
            <div className="col">
                <h2>{producto.category}</h2>
                <h1>{producto.name}</h1>
                <span>S/ </span>{producto.price}
                <br/>
                <br/>
                <p className='photoDescription'>{producto.description}</p>
                <br/>
                {isItemCount ?
                <ItemCount stock = {5} inicial = {1} onAdd={onAdd}  />
                :
                <InputCount/>
                }
            </div>    
        </div>
    </div>
    )
}

export default ItemDetail