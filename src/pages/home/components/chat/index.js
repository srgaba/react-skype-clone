import React, { useState } from 'react';

import {
    Container,
    Header,
    HeaderTitle,
    HeaderButtons,
    Body,
    Message,
    SendBox,
    Input,
    SendBoxButtons,
    Submit
} from './styles'

import eupng from '../../../../assets/images/eu.png';

export default function Chat()
{
    const [messages, setMessages] = useState([
        {
            owner: true,
            content: '',
            hour: '22h25'
        },
        {
            owner: false,
            content: '',
            hour: '22h25',
            img_url: eupng
        },
    ]);

    return(
       <Container>
           <Header>
                <HeaderTitle>
                    <h1>Gabriel Cerqueira</h1>
                    <p>Visto pela última vez hoje | Galeria | Localizar</p>
                </HeaderTitle>
                <HeaderButtons>
                    <div />
                    <div />
                </HeaderButtons>
           </Header>

           <Body>
                <Message owner>
                    <div>
                        <h1>20:29</h1>
                        <p>Estou enviando uma mensagem</p>
                    </div>
                </Message>
                <Message>
                    <img src={eupng} alt="static"/>
                    <div>
                        <h1>Gabriel Cerqueira, 20:29</h1>
                        <p>Estou enviando uma mensagem</p>
                    </div>
                </Message>
                <Message marginLeft>
                    <div>
                        <p>Estou enviando uma mensagem</p>
                    </div>
                </Message>
                <Message owner>
                    <div>
                        <h1>20:29</h1>
                        <p>Estou enviando uma mensagem</p>
                    </div>
                </Message>
           </Body>

           <SendBox>
                <Input>
                    <input 
                        type="text"
                        placeHolder="Digite aqui" 
                    />
                </Input>
                <Submit />
                {/* <SendBoxButtons>
                    <div style={{ marginLeft: '20px' }}/>
                    <div />
                    <div />
                </SendBoxButtons> */}
           </SendBox>
       </Container>
    );
}