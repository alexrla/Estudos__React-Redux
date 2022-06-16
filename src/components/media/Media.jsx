import React from 'react';
import styled from 'styled-components';

function Media(props) {
    return (
        <Container>
            <span className="content">
                <span>Resultado:</span>
                <strong>5</strong>
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