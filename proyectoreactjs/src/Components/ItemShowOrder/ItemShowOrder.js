import { Link } from "react-router-dom";
import "../ItemShowOrder/ItemShowOrder.css";

export default function ItemShowOrder({order}) {
    return (
        <div className="showOrderContainer">
            <h2> Tu orden:</h2> 
            <p><strong>Tu id:</strong> {order.id}</p>
            <p><strong>Nombre:</strong> {order.name}</p>
            <p><strong>Comentarios: </strong>{order.comment}</p>
            <p><strong>Fecha:</strong> {order.date}</p>
            <Link to={"/"}>
                <button>Volver</button>
            </Link>
        </div>
    );
}