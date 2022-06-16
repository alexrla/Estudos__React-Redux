import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import { alterarNumeroMinimo, alterarNumeroMaximo } from '../../store/actions/actionCreatorNumeros';

// Acessando via props, o que está dentro do estado
function mapStateToProps(state) {
    return {
        minimo: state.numeros.minimo,
        maximo: state.numeros.maximo
    };
}

function mapDispatchToProp(dispatch) {
    return {
        alterarValorMinimo(novoNumero)    {
            // Action creator -> Retorna um action
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
        alterarValorMaximo(novoNumero)    {
            // Action creator -> Retorna um action
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        }
    }
}

function Intervalo(props) {
    const { minimo, maximo } = props;
    return (
        <Container>
            <span>
                <strong>Mínimo:</strong>
                <input type="number" value={minimo} onChange={event => props.alterarValorMinimo(+event.target.value)} />
            </span>

            <span>
                <strong>Máximo:</strong>
                <input type="number" value={maximo} onChange={event => props.alterarValorMaximo(+event.target.value)} />
            </span>
        </Container>
    );
}

export default connect(mapStateToProps, mapDispatchToProp) (Intervalo);

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