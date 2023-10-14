import "./styles.css";
import { useState } from "react";
export default function App() {
  const [numero, setNumero] = useState(0);
  //const Mais = () => setNumero(numero + 1);
  // const Menos = () => setNumero(numero => 0);
  //const Menos = () => setNumero (numero - 1);
  //Atualização do código depois da aula do dia 04/10/2023

  const Mais = () => {
    if (numero < 10) {
      setNumero(numero + 1);
    }
  };

  const Menos = () => {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  };

  return (
    <div className="App">
      <h1>Aprendendo a Conta</h1>
      <h2> De 0 a 10 </h2>
      <p>{numero}</p>
      <button onClick={Menos}> - </button>
      <button onClick={Mais}> + </button>
    </div>
  );
}
