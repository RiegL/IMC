import { useState } from "react";
import "./app.css";
import { Stack, TextField, Typography } from "@mui/material";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Routes from "./routes";

export default function App() {
  const [peso, setPeso] = useState(""); //para digitar o peso/algura e ficar armazenado para depois realizar o calc
  const [altura, setAltura] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [limparMensagem, setLimparMensagem] = useState("false"); // estado para limpar a mensagem

  function calcularIMC() {
    //função calcular o IMC
    const alt = altura / 100; // vai ser a altura dividido por 100
    const imc = peso / (alt * alt); // peso dividido por alt X alt

    if (imc < 18.6) {
      setMensagem("Você está abaixo do peso! Seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem("Você está no peso ideal! Seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem(
        "Você está levemente acima do peso! Seu IMC é: " + imc.toFixed(2)
      );
    } else if (imc > 34.9) {
      setMensagem("Cuidado obesidade! Seu IMC é: " + imc.toFixed(2));
    }

    setLimparMensagem(false); // redefinir o estado para false após o cálculo
  }

  function limparMensagemBotao() {
    setMensagem(""); // limpar mensagem
    setAltura(""); // limpar altura
    setPeso(""); // limpar peso
    setLimparMensagem(true); // definir o estado para true para indicar que a mensagem deve ser limpa
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ maxHeight: "100vh" }}>
        <Box sx={{ bgcolor: "#fffff", height: "100vh" }}>
          <div className="app">
            <Typography sx={{ fontSize: [35, 40, 50] }}>
              Calculadora IMC
            </Typography>
            <span>Vamos calcular seu IMC</span>
            <div className="area-input">
              {/* usado biblioteca mui */}

              <Stack spacing={4}>
                <TextField
                  autoFocus
                  label="Peso Ex: 90"
                  value={peso}
                  onChange={(e) => {
                    setPeso(e.target.value);
                  }}
                />
                <TextField
                  label="Altura Ex: 190"
                  value={altura}
                  onChange={(e) => {
                    setAltura(e.target.value);
                    setLimparMensagem(false);
                  }}
                />
                <button onClick={calcularIMC}>Calcular</button>
                <button onClick={limparMensagemBotao}>Limpar</button>
              </Stack>
              <br></br>
                <Typography sx={{fontSize:[17]}}>
                  {mensagem}
                </Typography>

              {/*  
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
        /> */}
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
}
