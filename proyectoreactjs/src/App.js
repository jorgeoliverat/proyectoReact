import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import ShowOrder from './Components/ShowOrder/ShowOrder';
import { Form } from './Components/Form/Form';
import { Footer } from './Components/Footer/Footer';
import CartContextProvider from './context/CartContext';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path='/' element = { <ItemListContainer/> } />
        <Route path='/categoria/:id' element = { <ItemListContainer/> } />
        <Route path='/detalle/:detalleId' element = { <ItemDetailContainer/> } />
        <Route path='/Cart' element = { <Cart/> } />
        <Route path="/checkout" element = { <Form />} />

        <Route path="/showOrder" element = { <ShowOrder />} />

        <Route path="/*" element = { <Navigate to='/' replace  /> } />
      </Routes>
      <Footer/>
    </div>
    </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
