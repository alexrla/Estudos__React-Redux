import React, { useState } from 'react';
import styled from 'styled-components';

import Card from "./components/layout/Card";

import Intervalo from './components/intervalo/Intervalo';
import Media from './components/media/Media'; 
import Soma from './components/soma/Soma';
import Sorteio from './components/sorteio/Sorteio';

export default function App(props) {
  const [ minimo, setMinimo ] = useState(1);
  const [ maximo, setMaximo] = useState(10);
  return (
    <Container className="App">
        <h1>Estudos React</h1>

        <div className="cards">
            <div className="linha">
              <Card titulo="Intervalo de números" backgroundCard="#F44336" backgroundHeader="#C62828">
                <Intervalo minimo={minimo} maximo={maximo} setMinimo={setMinimo} setMaximo={setMaximo} />
              </Card>
            </div>

            <div className="linha">
              <Card titulo="Média dos números" backgroundCard="#4CAF50" backgroundHeader="#2E7D32">
                  <Media minimo={minimo} maximo={maximo} />
              </Card>

              <Card titulo="Soma dos números" backgroundCard="#2196F3" backgroundHeader="#1565C0">
                  <Soma minimo={minimo} maximo={maximo} />
              </Card>

              <Card titulo="Sorteio de um número" backgroundCard="#9C27B0" backgroundHeader="#6A1B9A">
                  <Sorteio minimo={minimo} maximo={maximo} />
              </Card>
            </div>
        </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  flex-direction: column;

  text-align: center;

  h1  {
    font-weight: 200;
  }

  .cards  {
    display: flex;

    flex-direction: column;

    justify-content: center;
  }

  .linha  {
    display: flex;

    flex: 1;
  }
`;