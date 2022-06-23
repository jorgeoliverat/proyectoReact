import React from 'react'

import { Link } from 'react-router-dom'

// opciones de compra cuando el usuario le da al boton agregar carrito
const InputCount = () => {
    return (
    <>
        <Link to='/cart' >
            <button className="btn btn-outline-success mx-5">Ir al Carrito</button>
        </Link>
        <Link to='/' >
            <button className="btn btn-outline-success">Seguir comprando</button>
        </Link>
        </>
    )
}

export default InputCount