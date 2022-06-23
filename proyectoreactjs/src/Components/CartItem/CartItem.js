import { useCartContext } from "../../context/CartContext";

import './CartItem.css';
import { BsBagXFill } from "react-icons/bs";

export default function CartItem({item}) {
    const {clearItem} = useCartContext();
//Esta función llama a la funcion clearItem del Cart Context
//que elimina el producto del carrito.
    function removeItem() {
        clearItem(item.id)
    }
    
    return (
        <li>
            <img className="photoCartItem" src={item.photo} style={{width: 50}} alt = "producto"/>
            Item: {item.name} - Precio: S/{item.price} - Cantidad: {item.cant} 
            <span className="itemBag" onClick={removeItem}> 
                <span className="bagCursor"><BsBagXFill/></span>    
            </span>
        </li>
    );
}