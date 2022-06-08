import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import InterButton from '../InterButton/InterButton'
import { ItemCount } from '../ItemCount/ItemCount'
import '../styles/ItemDetail.css'

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
        <div className="row" >
        <div className="col">
            <img className="fotoDetalle" src={producto.foto} alt='img' />
        </div>
        <div className="col">
        <h2>{producto.categoria}</h2>
        <h1>{producto.name}</h1>
        <p>{producto.price}</p>
        <p className='fotoDescripcion'>{producto.descripcion}</p>
        <br/>
        {isItemCount ?
        <ItemCount stock = {5} inicial = {1} onAdd={onAdd}  />
        :
        <InterButton/>
        }
        </div>    
    </div>

    )
}

export default ItemDetail