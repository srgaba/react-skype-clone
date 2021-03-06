import React, { useState } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import { motion } from 'framer-motion';

import api from '../../util/api';

import {
    Container,
    Body,
    SkypeLogo,
    Title,
    Inputs,
    Message,
    ButtonLogin
} from './styles';

import skypepng from '../../assets/images/skype.png';
import microsoftpng from '../../assets/images/microsoft.png';

export default function Register()
{
    const history = useHistory();

    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputNameChange = data => {
        setName(data.target.value);
    };

    const handleInputUserChange = data => {
        setUser(data.target.value);
    };

    const handleInputEmailChange = data => {
        setEmail(data.target.value);
    };

    const handleInputPasswordChange = data => {
        setPassword(data.target.value);
    };

    const handleSubmit = async () => {
        try{
            const { data: { id }} = await api.post('user/create', {
                name,
                user,
                email,
                password
            });

            history.push('/');
        }catch(err)
        {
            //
        }
    };

    return(
        <Container>
            <Body animate={{ opacity: 1 }} transition={{ duration: 0.75 }}>
                <motion.img 
                    src={skypepng} alt="static"
                    animate={{ y: -20,  scale: 1.4, marginBottom: '3%'}}
                    transition={{ duration: 1.5 }}
                />
                <Title>
                    <h1>Registrar</h1>
                    <p>registro direto no skype</p>
                </Title>
                <Inputs>
                    <input 
                        type="text"
                        placeholder="Nome"
                        onChange={handleInputNameChange}
                    />
                    <input 
                        type="text"
                        placeholder="Usuário"
                        onChange={handleInputUserChange}
                    />
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
                    <p>Já tem uma conta? <Link to="/">Logar</Link> </p>
                </Message>
                <ButtonLogin 
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                >
                    Criar
                </ButtonLogin>
            </Body>
        </Container>
    );
}