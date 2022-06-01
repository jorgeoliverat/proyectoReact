import { useCartContext } from "../../context/CartContext";
import './CartItem.css';
import { BsBagXFill } from "react-icons/bs";

export default function CartItem({item}) {
    const {clearItem} = useCartContext();

    function removeItem() {
        clearItem(item.id)
    }
    
    return (
        <li>Item: {item.name} - Precio: S/{item.price} - Cantidad: {item.cant} 
        <span onClick={removeItem}>
            <i><BsBagXFill/></i>
        </span>
        </li>
    );
}