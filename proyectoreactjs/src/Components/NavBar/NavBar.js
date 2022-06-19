import React from 'react'

import Navbar from 'react-bootstrap/Navbar' 
import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'


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
        <CartWidget/>
        </Navbar>
    )
}

export default NavBar