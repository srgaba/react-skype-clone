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
                    <h1>Registrar</h1>
                    <p>registro direto no skype</p>
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
                    <input 
                        type="password"
                        placeholder="Repita a senha"
                    />
                </Inputs>
                <Message>
                    <p>Já tem uma conta? <a href="">Logar</a></p>
                </Message>
                <ButtonLogin>Criar</ButtonLogin>
            </Body>
        </Container>
    );
}