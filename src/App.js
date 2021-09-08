import logo from './logo.svg';
import ImageContainer from './componentes/Container/ImageContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ImageContainer index='1' nombre='Nombre'></ImageContainer>
      </header>
    </div>
  );
}

export default App;
