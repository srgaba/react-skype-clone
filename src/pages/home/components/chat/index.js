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
            header: '22h25',
            content: 'Olá Gabriel, como você está?',
        },
        {
            owner: false,
            header: 'Gabriel Cerqueira, 22h25',
            content: 'Eu estou puto, mas sigo firme.',
            img_url: eupng
        },
    ]);

    const [send, setSend] = useState('');
    const [showButtonSend, setShowButtonSend] = useState(false);

    const handleInputSendChange = data => {
        const { target: { value } } = data;

        if(value.length > 0)
        {
            setShowButtonSend(true);
        } else {
            setShowButtonSend(false);
        };

        setSend(value);
    };

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
               {messages.map(message => (
                   <Message owner={message.owner ? true : false}>
                       {!message.owner && <img src={message.img_url} alt="static"/> }
                        <div>
                            <h1>{message.header}</h1>
                            <p>{message.content}</p>
                        </div>
                   </Message>
               ))}
           </Body>

           <SendBox>
                <Input>
                    <input 
                        onChange={handleInputSendChange}
                        value={send}
                        type="text"
                        placeHolder="Digite aqui" 
                    />
                </Input>
                {showButtonSend ? 
                    <Submit />
                    :
                    <SendBoxButtons>
                        <div style={{ marginLeft: '20px' }}/>
                        <div />
                        <div />
                    </SendBoxButtons>
                }
           </SendBox>
       </Container>
    );
}