import React, {useState} from 'react';
import './App.css';
import NovoConteudo from './NovoConteudo';
import NovoConteudoDois from './NovoConteudoDois';

function App(){
  const [str,setStr] = useState('Oi mundo');

  function handleClick(){
    setStr('Olá mundo que foi carregado.')
  }

  return (
    <div className='App'>
      <h1>{str}</h1>
      <NovoConteudo></NovoConteudo>
      <NovoConteudo valor="texto adicional"></NovoConteudo>
      <NovoConteudoDois></NovoConteudoDois>
      <button onClick={()=>handleClick()}>
        Clique para mudar
      </button>
    </div>
  )
}


/*
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Olá Mundo!!!</h1>
    </div>
  );
}
*/
export default App;
