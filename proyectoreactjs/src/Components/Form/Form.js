import React from "react";
import { useState } from "react";

import { useCartContext } from "../../context/CartContext";
import ShowOrder from "../ShowOrder/ShowOrder";

import swal from "sweetalert";
import "../Form/Form.css"

    export const Form = () => {
    const {generateOrder} = useCartContext ();
    const [customer, setCustomer] = useState({});
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [email2Error, setEmail2Error] = useState(false);
    const [envoy, setEnvoy] = useState(false);
    
    function generateCustomer(e) {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    }

    //Funcion que comprueba los datos del formulario, si está incompleto muestra error.
    //Si están los campos llenos genera un funcion de order y la funcion que dispara la alerta del sweetalert.
    function dataManage(e) {
        e.preventDefault ()
        setNameError(!customer.name);
        setPhoneError(!customer.phone);
        setEmailError(!customer.email);
        setEmail2Error(!(customer.emailConfirm === customer.email));
        if (customer.name && customer.phone && customer.email && (customer.emailConfirm === customer.email)) {
        generateOrder(customer);
        formAlert ();
        }
    }

    //alerta con SweetAlert para mostrar mensaje de compra exitosa,
    //al presionar boton de "ok" se redirecciona al componente ShowOrder.
    const formAlert = () => {
        swal ({
            title: "Su pedido fue enviado con exito",
            text: "Click aquí para ver tu pedido",
            icon: "success" 
        }).then(res => {
            if (res){
            setEnvoy(true);
            }
        })
    }

    if (envoy === false) {
    return (
        
        <form className="formulario" action="">
            <p>Ingrese sus datos para enviar el pedido:</p>
            
            <label htmlFor="name">Nombre</label>
            <input name="name" onChange={(e) => generateCustomer(e)} type="text" placeholder="Nombre"/>
            <br/>
            {nameError && <p className="cartForm__error">Debe ingresar un nombre</p>}

            <label htmlFor="phone">Teléfono</label>
            <input name="phone" onChange={(e) => generateCustomer(e)} type="tel" placeholder="Teléfono" />
            <br/>
            {phoneError && <p className="cartForm__error">Debe ingresar un teléfono</p>}

            <label htmlFor="country">País</label>
            <input name="country" onChange={(e) => generateCustomer(e)} type="text" placeholder="País" />

            <label htmlFor="city">Ciudad</label>
            <input name="city" onChange={(e) => generateCustomer(e)} type="text" placeholder="Ciudad"/>
            
            <label htmlFor="email">Email</label>
            <input name="email" onChange={(e) => generateCustomer(e)} type="email" placeholder="correo@correo.com"/>
            <br/>
            {emailError && <p className="cartForm__error">Debe ingresar un correo electrónico</p>}
            
            <label htmlFor="emailConfirm">Confirmar Email</label>
            <input name="emailConfirm" onChange={(e) => generateCustomer(e)} type="email" placeholder="correo@correo.com"/>
            <br/>
            {email2Error && <p className="cartForm__error">El correo electrónico no coincide</p>}

            <button onClick={dataManage} type="submit">Terminar pedido</button>
        </form>
    );
    }
    else {
        return (
                <ShowOrder/>
        );
    }
    };



