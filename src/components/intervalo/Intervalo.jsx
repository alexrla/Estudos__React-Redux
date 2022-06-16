import React from 'react';
import styled from 'styled-components';

function Intervalo(props) {
    const { minimo, maximo, setMinimo, setMaximo } = props;

    return (
        <Container>
            <span>
                <strong>Mínimo:</strong>
                <input type="number" value={minimo} onChange={event => setMinimo(+event.target.value)} />
            </span>

            <span>
                <strong>Máximo:</strong>
                <input type="number" value={maximo} onChange={event => setMaximo(+event.target.value)} />
            </span>
        </Container>
    );
}

export default Intervalo;

const Container = styled.div`
    display: flex;

    flex-direction: column;

    gap: 15px;

    span    {
        align-items: center;

        flex-direction: column;

        display: flex;

        gap: 8px;
    }
`;