import React, {useState} from "react";
import '../styles/ItemCount.css'

export const ItemCount = ({stock, inicial}) => {
    const [cuantity, setCuantity] = useState (inicial);

    const onAdd = () => {console.log(cuantity)}
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
        <section className="count">
            <ul>
            <button type="button" className="buttons" onClick={resta}>-</button>
            {cuantity}
            <button type="button" className="buttons" onClick={suma}>+</button>
            </ul>

            <button type="submit" className="count__button" value={cuantity} onClick={onAdd}>
                AGREGAR AL CARRITO
            </button>
        </section>
    );
}

// export default ItemCount