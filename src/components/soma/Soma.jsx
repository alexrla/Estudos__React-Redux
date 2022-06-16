import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

// Acessando via props, o que está dentro do estado
function mapStateToProps(state) {
    return {
        minimo: state.numeros.minimo,
        maximo: state.numeros.maximo
    };
}

function Soma(props) {
    const { minimo, maximo } = props;

    return (
        <Container>
            <span className="content">
                <span>Resultado:</span>
                <strong>{(maximo + minimo)}</strong>
            </span>
        </Container>
    );
}

export default connect(mapStateToProps) (Soma);

const Container = styled.div`
    .content    {
        display: flex;

        gap: 5px;
    }
`;