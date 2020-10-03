import React from 'react';
import { Container, Button, Text, Title, ButtonText } from './styles.js'
import spilledWine from '../../assets/spilledWine.jpg'
import { useHistory } from 'react-router-dom';

export default function NotFound() {

    const history = useHistory();

    async function handleHome() {
        history.push('/');
    }

    return (
        <Container>
            <img src={spilledWine} ></img>
            <Title>404</Title>
            <Text>Página não encontrada</Text>
            <Button onClick={handleHome}>
                <ButtonText>Página Inicial</ButtonText>
            </Button>
        </Container>
    );
}