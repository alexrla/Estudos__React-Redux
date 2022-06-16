import React from 'react';
import styled from 'styled-components';

function Soma(props) {
    return (
        <Container>
            <span className="content">
                <span>Resultado:</span>
                <strong>10</strong>
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