import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar' 
import CartWidget from '../CartWidget/CartWidget'

import Container from 'react-bootstrap/Container'
import '../NavBar/NavBar.css'

//NavBar linkeado con react router dom para filtrar por categoria.
//Se agregó componente CartWidget para mostrar icono de carrito.
const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Link className="linkStyle" to = "/">
            <Navbar.Brand href="#home">KUNA STORE</Navbar.Brand>
        </Link>    
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Link className="linkStyle" to='/categoria/Zapatilla'>Zapatillas</Link>
            <Link className="linkStyle" to='/categoria/Polo'>Polos</Link>
            <Link className="linkStyle" to='/categoria/Polera'>Poleras</Link>
        </Navbar.Collapse>
        </Container>
        <div className='CartPosition'><CartWidget/></div>
        </Navbar>
    )
}

export default NavBar