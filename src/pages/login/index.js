import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import api from '../../util/api';

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
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputEmailChange = data => {
        setEmail(data.target.value);
    };

    const handleInputPasswordChange = data => {
        setPassword(data.target.value);
    };

    const handleButtonLogin = async () => {
        try{
            const { data } = await api.post('session', {
                email,
                password
            }); 

            localStorage.setItem('user', JSON.stringify(data));

            history.push('/home');
        }catch(err)
        {
            //
        }
    };

    return(
        <Container>
            <Body animate={{ opacity: 1 }} transition={{ duration: 0.75 }}>
                <motion.img src={skypepng} alt="static"
                    animate={{ y: -20,  scale: 1.4, marginBottom: '3%'}}
                    transition={{ duration: 1.5 }}
                />
                <Title>
                    <h1>Entrar</h1>
                    <p>continuar para o skype</p>
                </Title>
                <Inputs>
                    <input 
                        type="text"
                        placeholder="Email telefone ou skype"
                        onChange={handleInputEmailChange}
                    />
                    <input 
                        type="password"
                        placeholder="Senha"
                        onChange={handleInputPasswordChange}
                    />
                </Inputs>
                <Message>
                    <p>não tem uma conta? <Link to="/register">Crie uma</Link> </p>
                </Message>
                <ButtonLogin 
                    onClick={handleButtonLogin}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                >Próximo</ButtonLogin>
            </Body>
        </Container>
    );
}