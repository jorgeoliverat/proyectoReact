import React from 'react'
import { Link } from 'react-router-dom'

// opciones de compra cuando el usuario le da al boton agregar carrito
const InputCount = () => {
    return (
    <>
        <Link to='/cart' >
            <button 
                className="btn btn-outline-primary" 
                onClick={()=>console.log('ir a cart') } 
            >Ir al Cart o Terminar compra</button>
        </Link>
        <Link to='/' >
            <button 
                className="btn btn-outline-primary" 
                onClick={()=>console.log('ir al home') } 
            >Seguir comprando</button>
        </Link>
        </>
    )
}

export default InputCount