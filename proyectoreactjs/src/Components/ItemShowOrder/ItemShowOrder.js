import { Link } from "react-router-dom";

import "../ItemShowOrder/ItemShowOrder.css";

export default function ItemShowOrder({order}) {

    //Página que muestra el voucher de compra.
    return (
        <div className="showOrderContainer">
            <h2> Tu orden:</h2> 
            <p><strong>Tu id de compra:</strong> {order.id}</p>
            <p><strong>Tu nº de orden:</strong> {order.randomid}</p>
            <p><strong>Nombre:</strong> {order.name}</p>
            <p><strong>Monto Total: </strong> <span>S/</span> {order.price}</p>
            <p><strong>Fecha:</strong> {order.date}</p>
            <p><strong>¡Muchas gracias por su compra!</strong></p>
            <Link to={"/"}>
                <button class="btn btn-outline-dark">Volver</button>
            </Link>
        </div>
    );
}