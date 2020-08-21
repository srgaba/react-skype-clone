import React, { useState, useEffect, useRef } from 'react';
import { parseISO, format } from 'date-fns';
import socketio from 'socket.io-client';

import api from '../../../../util/api';

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

export default function Chat({ props })
{
    const [friendName, setFriendName] = useState('');

    const [messages, setMessages] = useState([]);

    const [send, setSend] = useState('');
    const [showButtonSend, setShowButtonSend] = useState(false);

    useEffect(() => {
        const { friend_name, room_id, friend_url } = props;
        const { user: { id: user_id } } = JSON.parse(localStorage.getItem('user'));

        const socket = socketio('http://localhost:3333', { 
            query: {
                userId: user_id
            }
        });

        socket.on('newmessage-room', props => {
            const { room_id: room_id_received, messages } = props;

            if(room_id_received === room_id)
            {
                setMessages(formatMessages(messages));
            }
        });
        
        async function loadMessagesApi()
        {
            const { data } = await api.get(`messages/listinroom/${room_id}`)

            setMessages(formatMessages(data));
        }

        function formatMessages(messages)
        {
            var lastowner;
            
            const formattedMessages = messages.map(index => {
                if(index.user_id === user_id)
                {
                    const obj = {
                        owner: true,
                        header: format(parseISO(index.createdAt), 'H:mm:s'),
                        content: index.text
                    };  

                    lastowner = true;

                    return obj;
                } 
                else {
                    if(!lastowner)
                    {
                        const obj = {
                            owner: false,
                            content: index.text,
                            hide: true
                        };  
                       
                        lastowner = false;

                        return obj;
                    } else {
                        const obj = {
                            owner: false,
                            header: friend_name + " " + format(parseISO(index.createdAt), 'H:mm:s'),
                            content: index.text,
                            img_url: friend_url
                        };  
                       
                        lastowner = false;

                        return obj;
                    }
                }
            });

            return formattedMessages;
        }
    

        loadMessagesApi();
        setFriendName(friend_name);
    }, [])

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
                    <h1>{friendName}</h1>
                    <p>Visto pela última vez hoje | Galeria | Localizar</p>
                </HeaderTitle>
                <HeaderButtons>
                    <div />
                    <div />
                </HeaderButtons>
           </Header>

           <Body>
               {messages.map(message => (
                   <Message owner={message.owner ? true : false} hide={message.hide ? true : false}>
                       {!message.owner && <img src={message.img_url} alt="static" />}
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