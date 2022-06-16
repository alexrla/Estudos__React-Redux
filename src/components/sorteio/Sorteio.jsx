import React from 'react';
import styled from 'styled-components';

function Sorteio(props) {
    const { minimo, maximo } = props;

    const aleatorio = parseInt(Math.random() * (maximo - minimo)) + minimo;

    return (
        <Container>
            <span className="content">
                <span>Resultado:</span>
                <strong>{aleatorio}</strong>
            </span>
        </Container>
    );
}

export default Sorteio;

const Container = styled.div`
    .content    {
        display: flex;

        gap: 5px;
    }
`;