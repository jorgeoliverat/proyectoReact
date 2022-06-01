import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import '../styles/CartWidget.css'
import { useCartContext } from "../../context/CartContext";


export default function CartWidget () {
    const {totalItems} = useCartContext();

    return (
        <> 
        <Link to='/Cart' style={{pointerEvents: !totalItems ? 'none' : ''}}>
            <div className='cartWidget' style={{opacity: !totalItems ? '0.5' : '10'}}>
                <span className="logoNavBar" ><GrCart/></span>
                <span className="cartWidget__counter">{totalItems}</span>
            </div>
        </Link>  
        </>
    )
}

