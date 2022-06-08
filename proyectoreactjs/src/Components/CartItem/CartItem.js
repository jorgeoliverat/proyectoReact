import { useCartContext } from "../../context/CartContext";
import './CartItem.css';
import { BsBagXFill } from "react-icons/bs";

export default function CartItem({item}) {
    const {clearItem} = useCartContext();

    function removeItem() {
        clearItem(item.id)
    }
    
    return (
        <li>
            <img className="fotoCartItem" src={item.foto} style={{width: 50}} alt = "producto"/>
            Item: {item.name} - Precio: S/{item.price} - Cantidad: {item.cant} 
            <span className="itemBag" onClick={removeItem}> 
                <BsBagXFill/>
            </span>
        </li>
    );
}