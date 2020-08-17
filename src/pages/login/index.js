import React from 'react';

import {
    Container,
    Body,
    Title,
    Inputs,
    Message,
    ButtonLogin
} from './styles';

import skypepng from '../../assets/images/skype.png';

export default function Register()
{
    return(
        <Container>
            <Body>
                <img src={skypepng} alt="static"/>
                <Title>
                    <h1>Entrar</h1>
                    <p>continuar para o skype</p>
                </Title>
                <Inputs>
                    <input 
                        type="text"
                        placeholder="Email telefone ou skype"
                    />
                    <input 
                        type="password"
                        placeholder="Senha"
                    />
                </Inputs>
                <Message>
                    <p>não tem uma conta? <a href="">Crie uma</a></p>
                </Message>
                <ButtonLogin>Próximo</ButtonLogin>
            </Body>
        </Container>
    );
}