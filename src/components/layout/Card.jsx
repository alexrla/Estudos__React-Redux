import React from 'react';
import styled from 'styled-components';

export default function Card(props) {
    const backgroundCard = props.backgroundCard  || "#FF0000";
    const backgroundHeader = props.backgroundHeader || "#FF0000";

    return (
        <Container className="card" style={{backgroundColor: `${backgroundCard}`}}>
            <Title className="titulo" style={{backgroundColor: `${backgroundHeader}`}}>
                {props.titulo}
            </Title>

            <Content className="conteudo">
                {props.children}
            </Content>
        </Container>
    );
}

const Container = styled.div`
    border: none;

    display: flex;
    
    flex-direction: column;

    flex: 1;

    font-size: 1.5rem;

    font-weight: 300;

    margin: 10px;

    overflow: hidden;
`;

const Title = styled.header`
    display: flex;

    flex: 1;

    justify-content: center;

    padding: 5px 0px;
`;

const Content = styled.main`
    align-items: center;

    color: #FFF;

    display: flex;

    flex: 1;

    flex-direction: column;

    justify-content: center;

    padding: 10px;
`;