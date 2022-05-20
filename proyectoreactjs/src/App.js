import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import { CartContect } from './context/CartContext';



function App() {
  return (
    <BrowserRouter>
      <CartContect.Provider>

    <div className='App'>
    <NavBar/>
    <Routes>
        <Route path='/' element = { <ItemListContainer greeting = {'TIENDA'} /> } />
        <Route path='/categoria/:id' element = { <ItemListContainer greeting = {'CATEGORIA'} /> } />
        <Route path='/detalle/:detalleId' element = { <ItemDetailContainer/> } />
        <Route path='/Cart' element = { Cart } />

        <Route path="/*" element = { <Navigate to='/' replace  /> } />
    {/* {count} */}
    {/* <button onClick={contador} >Click +</button> */}
    </Routes>
    </div>
      </CartContect.Provider>
    </BrowserRouter>
  );
}

export default App;
