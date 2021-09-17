import logo from './logo.svg';
import Header from './componentes/Header/Header';
import Body from './componentes/Body/Body';
import MemeContainer from './componentes/MemeContainer/MemeContainer';
import Paginacion from './componentes/Paginacion/Paginacion';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MemeContainer name='MemeContainer'/>
      <Paginacion />
    </div>
  );
}

export default App;
