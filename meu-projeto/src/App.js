import './App.css';
import {useState} from 'react'
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {
  const [nome, setNome] = useState()


  return (
    <div className="App">
     <h1>State Lift</h1>
     <SeuNome setNome={setNome}/>{/* setNome modifica o nome */}
    <Saudacao nome= {nome}/> {/* Ja ta enviando o dado modificado*/}
   
    
    {/* Colocando o useState no*/}
    </div>
  );
}

export default App;
