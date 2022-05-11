
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
// import { useState } from 'react';


function App() {
// const [count, setCount] = useState(0)

//   function contador () {
//     setCount (count + 1)
//   }

  return (
    <div className='App'>
    <NavBar/>
    <ItemListContainer greeting = {'Boton contador'} />
    {/* {count} */}
    {/* <button onClick={contador} >Click +</button> */}
    </div>
  );
}

export default App;
