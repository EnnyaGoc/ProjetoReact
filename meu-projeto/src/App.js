import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'ennya'

  const newName = name.toUpperCase()

  function sum(a, b){
    return a+b
  }

  const url = "https://via.placeholder.com/150"
  return (
    <div className="App">
     <h1>Olá react!</h1>
     <p> olá, {newName}</p>
     <p>Soma: {sum(1, 2)}</p>
     <img src={url} alt="imagem"></img>
    </div>
  );
}

export default App;
