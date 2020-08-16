import React from 'react';

import Header from './components/header';
import ChatList from './components/chatlist';
import Chat from './components/chat';

import {
    Container,
    Left,
    Right
} from './styles';

export default function Home()
{
    return(
        <Container>
            <Left>
                <Header />  
                <ChatList />
            </Left>
            
            <Right>
                <Chat />
            </Right>
        </Container>
    )
};

