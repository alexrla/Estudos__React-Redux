import React from 'react';
import styled from 'styled-components';

function Intervalo(props) {
    return (
        <Container>
            <span>
                <strong>Mínimo:</strong>
                <input type="number" value={0} />
            </span>

            <span>
                <strong>Máximo:</strong>
                <input type="number" value={10} />
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