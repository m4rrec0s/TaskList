import { useRef, useState } from 'react';
import { v4 } from 'uuid';
import './App.css';


function App() {
  
  const inputRef = useRef();
  const [produtos, setProdutos] = useState([]);


  function click () {
      setProdutos([{id: v4(), name: inputRef.current.value}, ...produtos]);
  };

  function Deletar(id) {
    console.log(id);
  };
  
  return (
    <div className="App">
      <h1>Lista de Compras</h1>
      <input type="text" placeholder='produto...' ref={inputRef} />
      <button onClick={click}>Adicionar</button>
      <button onClick={Deletar(() => produtos.id)}>🗑️</button>

    {
      produtos.map((produtos) => (
        <p key={produtos.id}>{produtos.name}</p>
    ))}

    </div>
  )

};

export default App;
