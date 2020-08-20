import React, { useState } from 'react';

import Header from './components/header';
import ChatList from './components/chatlist';
import Chat from './components/chat';
import Welcome from './components/welcome';

import {
    Container,
    Left,
    Right
} from './styles';

export default function Home()
{
    const [welcomeProps, setWelcomeProps] = useState({ selected: true, props: null });
    const [chatProps, setChatProps] = useState({ selected: false, props: null });

    const navigateRight = (component, props) => {
        if(component === 'chat')
        {
            setChatProps({
                selected: true,
                props
            });

            setWelcomeProps({
                selected: false,
                props: null
            });
        }
        else if (component === 'welcome')
        {
            setWelcomeProps({
                selected: true,
                props
            });

            setChatProps({
                selected: false,
                props: null
            });
        }
    };

    return(
        <Container>
            <Left>
                <Header />  
                <ChatList navigateRight={navigateRight} />
            </Left>
            
            <Right>
                {welcomeProps.selected && <Welcome />}
                {chatProps.selected && <Chat props={chatProps.props} />}
            </Right>
        </Container>
    )
};

