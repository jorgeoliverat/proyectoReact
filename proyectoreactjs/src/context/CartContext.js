import { createContext, useContext, useState } from "react";
import { addDoc, collection, getFirestore} from "firebase/firestore";

const CartContext = createContext([])

export const useCartContext = () => useContext (CartContext)

const CartContextProvider = ({children}) =>{
    // Estados y funciones globales
    const [cartList, setCartList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [orderReady, setOrder] = useState({});

    function isInCart(id) {
        return cartList.some(el => el.id === id);
    }


    function addToCart(item) {
        if (isInCart(item.id)) {
            let i = cartList.findIndex(el => el.id === item.id);
            const newCartList = cartList;
            newCartList[i].cant += item.cant;
            updateCart(newCartList);
        } else {
            updateCart([...cartList,item]);
        }
    }

    //funcion vaciar carrito
    function clearCart() {
        updateCart([]);
    }

    function clearItem(id) {
        let i = cartList.findIndex(el => el.id === id);
        const newCartList = cartList;
        newCartList.splice(i,1);
        updateCart(newCartList);
    }

    function updateCart(arr) {
        setCartList(arr);
        setTotalPrice(arr
            .map(curr => curr.cant*curr.price)
            .reduce((acc,curr) => acc+curr,0)
        );
        setTotalItems(arr
            .map(curr => curr.cant)
            .reduce((acc,curr) => acc+curr,0)
        );
    }

    function generateOrder (customer) {
        let date = new Date();
        let orderDate = date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear() 
        let order = {}
        let orderid = Math.round(Math.random()*20);
        
        order.buyer = customer;
        order.name = order.buyer.name
        order.price = totalPrice
        
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.name
            const price = cartItem.price * cartItem.cant
            return {id, nombre, price}   
        })  
        order.date = orderDate;
        order.randomid = orderid;

        const db = getFirestore();
        const queryCollection = collection(db, 'orders');
        addDoc(queryCollection, order)
        .catch(err => console.log(err))
        .finally(() => clearCart())

        setOrder(orderid)
    } 

    return (
        <CartContext.Provider value={ {
            cartList,
            addToCart,
            clearCart,
            clearItem,
            totalPrice,
            generateOrder,
            orderReady,
            totalItems
        } } >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
