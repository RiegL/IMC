import { useState } from "react";
import "./app.css";
import { Button, Stack, TextField, Typography, colors } from "@mui/material";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function App() {
  const [kilometragem, setKilometragem] = useState(""); //para digitar o km/combustivel e ficar armazenado para depois realizar o calc
  const [combustivel, setCombustivel] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [limparMensagem, setLimparMensagem] = useState("false"); // estado para limpar a mensagem

  function calcularMediaCarro() {
    if (kilometragem === "" || combustivel === "") {
      setMensagem("Por favor, insira os valores de quilometragem e combustível.");
      setLimparMensagem(false);
    } else {
      let media = parseFloat(kilometragem) / parseFloat(combustivel);
      setMensagem("Média do seu carro é: " + media.toFixed(2));
      setLimparMensagem(false);
    }
  }

  function limparMensagemBotao() {
    setMensagem(""); // limpar mensagem
    setKilometragem(""); // limpar altura
    setCombustivel(""); // limpar peso
    setLimparMensagem(true); // definir o estado para true para indicar que a mensagem deve ser limpa
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ maxHeight: "100vh" }}>
        <Box sx={{ bgcolor: "#fffff", height: "100vh" }}>
          <div className="app">
            <Typography sx={{ fontSize: [35, 40, 50] }}>
              Média do Carro
            </Typography>
            <br></br>
            <div className="area-input">
              {/* usado biblioteca mui */}

              <Stack spacing={4}>
                <TextField
                  autoFocus
                  label="Quilometragem total"
                  value={kilometragem}
                  onChange={(e) => {
                    setKilometragem(e.target.value);
                    setLimparMensagem(false);
                  }}
                />
                <TextField
                  label="Litros abastecidos"
                  value={combustivel}
                  onChange={(e) => {
                    setCombustivel(e.target.value);
                    setLimparMensagem(false);
                  }}
                />
                <Button
                  variant="contained"
                  color="success"
                  onClick={calcularMediaCarro}
                >
                  Calcular
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={limparMensagemBotao}
                >
                  Limpar
                </Button>

                {/* <button onClick={calcularIMC} color:sucess>Calcular</button> */}
                {/* <button onClick={limparMensagemBotao} id="limpa">Limpar</button> */}
              </Stack>
              <br></br>
              <Typography sx={{ fontSize: [14,17] }}>{mensagem}</Typography>

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
