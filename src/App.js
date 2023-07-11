import {useState} from 'react'
import './app.css';


export default function App() {
  const[peso, setPeso] = useState(''); //para digitar o peso/algura e ficar armazenado para depois realizar o calc
  const[altura, setAltura] = useState('');

  const[mensagem, setMensagem] = useState('');

function calcularIMC(){ //função calcular o IMC
  const alt = altura / 100; // vai ser a altura dividido por 100 
  const imc = peso / (alt * alt); // peso dividido por alt X alt


  if(imc < 18.6){
    setMensagem("Você está abaixo do peso! Seu IMC é: " + imc.toFixed(2))
  }else if(imc >= 18.6 && imc < 24.9){
    setMensagem("Você está no peso ideal! Seu IMC é: " + imc.toFixed(2))
  }else if(imc >= 24.9 && imc < 34.9){
    alert("Você está levemente acima do peso! Seu IMC é: " + imc.toFixed(2))
  }else if(imc > 34.9){
    setMensagem("Cuidado obesidade! Seu IMC é: " + imc.toFixed(2))
  }
}


  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>
      <div className="area-input">
        <input 
        type="text" 
        placeholder="Peso em (kg) Ex: 90"
        value={peso}
        onChange={(e) => setPeso(e.target.value)} //tudo que digitamos vai ficar armazenado no value
        />
        <input 
        type="text" 
        placeholder="Altura em (cm) Ex: 180"
        value={altura}
        onChange={(e) => setAltura(e.target.value)} //tudo que digitamos vai ficar armazenado no value
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>

      </div>

      <h2>{mensagem}</h2>

    </div>
  );
}