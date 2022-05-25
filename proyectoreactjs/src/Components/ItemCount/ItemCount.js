import React, {useState} from "react";
import InterButton from "../InterButton/InterButton";
import '../styles/ItemCount.css'

export const ItemCount = ({stock, inicial, onAdd}) => {
    const [cuantity, setCuantity] = useState (inicial);

    function onAdd(cant) {
        console.log(cant)
    }

    const resta = () => {
        if (cuantity > 1) {
            setCuantity (cuantity - 1);
        }
    };
    const suma = () => {
        if (cuantity < stock) {
            setCuantity (cuantity + 1);
        }
    };
    return (
        
            <div>

                {cuantity} <br/>
                <button type="button" className="btn btn-primary" onClick={resta}>-</button>
                <button type="button" className="btn btn-primary" onClick={suma}>+</button>
                <br/>
                {/* <button type="submit" className="btn btn-primary" onClick={() => onAdd(cuantity)}>
                    AGREGAR AL CARRITO
                </button> */}
                <InterButton/>            
            </div>
    );
}

// export default ItemCount