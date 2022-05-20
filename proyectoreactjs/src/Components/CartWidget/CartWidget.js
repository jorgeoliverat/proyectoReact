import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import '../styles/CartWidget.css'

const CartWidget = () => {
    return (
        <> 
        <Link to='/Cart'>
            <h2 className="logoNavBar" ><GrCart/></h2>
        </Link>  
        </>
    )
}

export default CartWidget