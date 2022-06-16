import React from 'react';
import styled from 'styled-components';

function Soma(props) {
    const { minimo, maximo } = props;

    const soma = maximo + minimo;

    return (
        <Container>
            <span className="content">
                <span>Resultado:</span>
                <strong>{soma}</strong>
            </span>
        </Container>
    );
}

export default Soma;

const Container = styled.div`
    .content    {
        display: flex;

        gap: 5px;
    }
`;