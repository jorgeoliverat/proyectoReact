import { collection, getDocs, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";

import Loader from "../Loader/Loader";
import ItemShowOrder from "../ItemShowOrder/ItemShowOrder";
import { useCartContext } from "../../context/CartContext.js";

export default function ShowOrder() {
    const {orderReady} = useCartContext();
    const [orderStatus, setStatus] = useState(false);
    const [order,setOrder] = useState({});

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'orders');
        getDocs(queryCollection)
        .then ( resp =>
            resp.docs.map(item => ({id: item.id, ...item.data()}))
            .map(item => item.randomid === orderReady && setOrder(item)))
            .catch(err => console.log(err))
            .finally(setTimeout(() =>  setStatus(true),1000));
    },[orderReady])
    return (
        <div>{ orderStatus ? <ItemShowOrder order={order}/> : <Loader />}</div>
    );
}