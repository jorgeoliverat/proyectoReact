import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"

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
            {cartList.map(product => <li>{product.name} - cantidad: {product.cant}</li> )}

            <p>{`Costo total: S/ ${totalPrice}`}</p>
            <button onClick={clearCart}>Vaciar carrito</button>

        </div>

    )
    }
    
    export default Cart

    