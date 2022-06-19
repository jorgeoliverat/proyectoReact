import React from "react";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
// import { collection, getFirestore, addDoc } from "firebase/firestore";
// import Swal from "sweetalert2";
// import swal from "sweetalert";
// import withReactContent from "sweetalert2-react-content";

import "../Form/Form.css"

    export const Form = () => {
    const {generateOrder} = useCartContext ();
    const [customer, setCustomer] = useState({});
    const [err, setErr] = useState(false);
    const [errmessage, setErrMsg] = useState("a");
    const [envoy, setEnvoy] = useState(false);
    
    function generateCustomer(e) {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    }
    function dataManage() {
        const validName = (name) => /^[a-zA-Z ]+$/.test(name);

        if (customer.email !== customer.emailConfirm){
            catchErr("email");
        } 
        if (!validName(customer.name) === true) {  
            catchErr("name")
        }
        if (customer.number < 10 ) {
            catchErr("number")
        }
        sendData();
    }
    function catchErr(err) {
        switch (err) {
            case "email":
                setErrMsg("El correo es distinto.")
                break;
            case "name":
                setErrMsg("El nombre no puede contener numeros, solo nombre y apellido")
                break;
            default:
            setErr(false);
        }
        setErr(true)
    };
    function sendData() {
        delete customer.emailConfirm;
        generateOrder(customer);
        setEnvoy(true);
    }
        
    
    if (envoy === false) {
    return (
        <form className="formulario" action="">
            <p>Ingrese sus datos para enviar el pedido:</p>
            <div>
            <label htmlFor="name">Nombre</label>
            <input name="name" onChange={(e) => generateCustomer(e)} type="text" placeholder="Nombre"/>
            </div>

            <div>
            <label htmlFor="lastName">Apellido</label>
            <input name="lastName" onChange={(e) => generateCustomer(e)} type="text" placeholder="Apellido" />
            </div>

            <div>
            <label htmlFor="direction">Dirección</label>
            <input name="adress" onChange={(e) => generateCustomer(e)} type="text" placeholder="Dirección" />
            </div>

            <div>
            <label htmlFor="district">Distrito</label>
            <input name="city" onChange={(e) => generateCustomer(e)} type="text" placeholder="Distrito"/>
            </div>
            
            <div>
            <label htmlFor="email">Email</label>
            <input name="email" onChange={(e) => generateCustomer(e)} type="email" placeholder="correo@correo.com"/>
            </div>
            
            <div>
            <label htmlFor="emailConfirm">Confirmar Email</label>
            <input name="emailConfirm" onChange={(e) => generateCustomer(e)} type="email" placeholder="correo@correo.com"/>
            </div>
            {err ? <p>Error: {errmessage}</p> : <p></p>}

            <button onClick={dataManage} type="submit">Terminar pedido</button>
        </form>
    );
    }
    else {
        return (
            <div className="formulario">
                <Link to="/showOrder">
                    <button type="submit">Ver pedido</button>
                </Link>
            </div>
        );
    }
    };



