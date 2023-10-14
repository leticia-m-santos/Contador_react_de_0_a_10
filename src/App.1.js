
export default function App() {
  const [numero, setNumero] = useState(0);

  const Mais = () => setNumero(numero + 1);
  const Menos = () => setNumero(numero - 1);



  return (
    <div className="App">
      <h1>Aprendendo a Conta</h1>
      <h2> De 0 a 10 </h2>
      <p>{numero}</p>
      <button onClick={Mais}>Menos</button>
      <button onClick={Menos}>Mais </button>
    </div>
  );
}
