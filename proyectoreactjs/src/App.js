
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className='App'>
    <NavBar/>
    <ItemListContainer greeting = {'Hola prueba'} />
    </div>
  );
}

export default App;
