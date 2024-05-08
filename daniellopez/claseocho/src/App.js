import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import Home from './pages/home';
import MundoPokemon from './pages/mundoPokemon';
import ListaPokemonsProvider from './state/listaPokemonesProvider';
function App() {
  return (
    <ListaPokemonsProvider>
      <Router>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/mundo-pokemon' element={ <MundoPokemon />} />
        </Routes>
      </Router>
    </ListaPokemonsProvider>
  );
}

export default App;
