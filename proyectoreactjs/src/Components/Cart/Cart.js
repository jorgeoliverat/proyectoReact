import {addDoc, collection, getFirestore} from "firebase/firestore"
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem";
import "../Cart/Cart.css"

const Cart = () => {

    const {cartList, clearCart, totalPrice, totalItems} = useCartContext ()
    
    let orden = {}     
        
        orden.buyer = { name: 'Jorge', email: 'j@gmail.com', phone: '957849073' }
        orden.total = totalPrice
    
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.name
            const price = cartItem.price * cartItem.cant
            // const cantidad = cartItem.cantidad
            
            return {id, nombre, price}   
        })   

        const db = getFirestore ()
        const querycollection = collection (db, 'orders')
        addDoc (querycollection, orden)
        .then (resp => console.log(resp))
        .catch (err => console.log(err))
        .finally (() => clearCart) 


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
            <button className='btn btn-outline-success'>Ir al checkout</button>
            </Link>
            <br/>
            <br/>
            <button className='btn btn-outline-success' onClick={clearCart}>Vaciar carrito</button>
        </div>

    )
    }
    
    export default Cart

    


    


    