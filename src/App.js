import logo from './logo.svg';
import Header from './componentes/Header/Header';
import Body from './componentes/Body/Body';
import MemeContainer from './componentes/MemeContainer/MemeContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="memeContainer">
        <MemeContainer name='MemeContainer'/>
      </div>
    </div>
  );
}

export default App;
