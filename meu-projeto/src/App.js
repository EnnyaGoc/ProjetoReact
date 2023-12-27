import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

const nome = "maria"
  return (
    <div className="App">
     <h1>Testando css</h1>
     <Frase />
     <Frase />
     <Frase />
     <SayMyName nome = "ennya"/>
     <SayMyName nome = "julia"/>
     <SayMyName nome={nome} />
     <Pessoa 
        nome="ennya"
        idade="21"
        profissao="programadora"
        foto="https://"
     />
     <List></List>
    </div>
  );
}

export default App;
