import React from 'react'

import Navbar from 'react-bootstrap/Navbar' 
import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container>
        <Link to = "/">
            <Navbar.Brand href="#home">KUNA STORE</Navbar.Brand>
        </Link>    
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Link className="categoriaEstilo" to='/categoria/Zapatilla'>Zapatillas</Link>
            <Link className="categoriaEstilo" to='/categoria/Polo'>Polos</Link>
            <Link className="categoriaEstilo" to='/categoria/Polera'>Poleras</Link>
        </Navbar.Collapse>
        </Container>
        <CartWidget/>
        </Navbar>
    )
}

export default NavBar