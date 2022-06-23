import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartContext";

import '../CartWidget/CartWidget.css'
import { GrCart } from "react-icons/gr";

//Se linkeo con react router dom el icono del carrito para acceder al Cart dandole click.
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

