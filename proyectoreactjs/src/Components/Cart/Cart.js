import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem";

const Cart = () => {

    const {cartList, clearCart, totalPrice, totalItems} = useCartContext ()

    if (!totalItems) {
        return (
            <div className="cart">
                <h1>El pedido está vacío</h1>
                <Link to='/'>
                    <button>Volver al menú</button>
                </Link>
            </div>
        );
    }

    return (
        <div>
            <h1>Su pedido:</h1>
            {cartList.map(el => <CartItem key={el.id} item={el}/>)}
            
            <p>{`Costo total: S/ ${totalPrice}`}</p>
            <button onClick={clearCart}>Vaciar carrito</button>

        </div>

    )
    }
    
    export default Cart

    