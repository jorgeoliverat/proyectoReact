import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import '../styles/ItemDetail.css'

const ItemDetail = ({producto}) => {

    const {addToCart, cartList} = useCartContext ()

    const onAdd = (cant) => {
        console.log(cant) 
        addToCart ({...producto, cant})
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
        <ItemCount stock = {5} inicial = {1} onAdd={onAdd}  />
        </div>    
    </div>

    )
}

export default ItemDetail