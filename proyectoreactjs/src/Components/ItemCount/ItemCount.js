import React, {useState} from "react";

import '../ItemCount/ItemCount.css'

export const ItemCount = ({stock, inicial, onAdd}) => {
    const [cuantity, setCuantity] = useState (inicial);

//funcion para sumar y restar la cantidad del producto.

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

                <button type="button" className="btn btn-success mx-2" onClick={resta}>-</button>
                {cuantity}
                <button type="button" className="btn btn-success mx-2" onClick={suma}>+</button>
                <br/>
                <button type="submit" className="btn btn-success mt-2" onClick={() => onAdd(cuantity)}>AGREGAR AL CARRITO</button>            
            </div>
    );
}

// export default ItemCount