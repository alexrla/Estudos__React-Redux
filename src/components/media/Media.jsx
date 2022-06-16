import React from 'react';
import styled from 'styled-components';

function Media(props) {
    const { minimo, maximo } = props;

    const media = (maximo + minimo) / 2;

    return (
        <Container>
            <span className="content">
                <span>Resultado:</span>
                <strong>{media}</strong>
            </span>
        </Container>
    );
}

export default Media;

const Container = styled.div`
    .content    {
        display: flex;

        gap: 5px;
    }
`;