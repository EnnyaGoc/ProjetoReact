import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

const nome = "maria"
  return (
    <div className="App">
     
     
     <SayMyName nome = "ennya"/>
     <SayMyName nome = "julia"/>
     <SayMyName nome={nome} />
     <Pessoa 
        nome="ennya"
        idade="21"
        profissao="programadora"
        foto="https://"
     />
    </div>
  );
}

export default App;
