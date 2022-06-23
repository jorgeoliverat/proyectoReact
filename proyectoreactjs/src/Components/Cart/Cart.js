import {addDoc, collection, getFirestore} from "firebase/firestore"
import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem";

import "../Cart/Cart.css"

const Cart = () => {

    const {cartList, clearCart, totalPrice, totalItems} = useCartContext ()
    //Objeto vacio para almacenar información del producto
        let orden = {}     
        
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.name
            const price = cartItem.price * cartItem.cant
            return {id, nombre, price}   
        })   
    
    //agregar informacion del producto a firebase,
    // por ultimo ejecutar la funcion "cleanCart" para elimnar los productos selecionados.    
        const db = getFirestore ()
        const querycollection = collection (db, 'orders')
        addDoc (querycollection, orden)
        .then (resp => console.log(resp))
        .catch (err => console.log(err))
        .finally (() => clearCart) 

//condición que evulua si el carrito esta vacio,
//mostrando "El pedido está vacio" y un boton para volver al home.
    if (!totalItems) {
        return (
            <div className="container mt-5">
                <label className="alert alert-success">EL PEDIDO ESTÁ VACIO</label><br />
                <Link to='/'>
                    <button className='btn btn-outline-success'>Volver al menú</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="textColor">
            <h1>Su pedido:</h1>
            {cartList.map(el => <CartItem key={el.id} item={el}/>)}
            <h2>{`COSTO TOTAL: S/ ${totalPrice}`}</h2>
            <br/>
            <Link to='/checkout'>
            <button className='btn btn-outline-success mx-3'>Ir al checkout</button>
            </Link>
            <button className='btn btn-outline-success' onClick={clearCart}>Vaciar carrito</button>
        </div>

    )
    }
    
    export default Cart

    


    


    