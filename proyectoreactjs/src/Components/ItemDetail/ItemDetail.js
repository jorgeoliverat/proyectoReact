import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import InputCount from '../InputCount/InputCount'
import { ItemCount } from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({producto}) => {
    const [isItemCount, setIsItemCount] = useState(true)
    const {addToCart, cartList} = useCartContext ()

    const onAdd = (cant) => {
        console.log(cant)
        addToCart( { ...producto, cant } )
        setIsItemCount(false)

    }

    console.log(cartList);

    return (
        
    <div className='textDetailContainer'>
        <div className="row" >
            <div className="col">
                <img className="photoDetail w-50 rounded" src={producto.photo} alt='img' />
            </div>
            <div className="col">
            <h2>{producto.category}</h2>
            <h1>{producto.name}</h1>
            <p>{producto.price}</p>
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