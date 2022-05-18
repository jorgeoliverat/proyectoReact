import React from 'react'
import '../styles/ItemDetail.css'

const ItemDetail = ({producto}) => {
    return (
        <div className="row" >
        <div className="col">
            <img className="fotoDetalle" src={producto.foto} alt='img' />
        </div>
        <div className="col">
        <h1>{producto.name}</h1>
        <h2>{producto.categoria}</h2>
        <p>{producto.price}</p>
        </div>    
    </div>

    )
}

export default ItemDetail