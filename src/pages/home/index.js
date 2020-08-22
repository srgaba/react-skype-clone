import React, { useState } from 'react';

import Header from './components/header';
import ChatList from './components/chatlist';
import FriendList from './components/friendlist';

import Chat from './components/chat';
import Welcome from './components/welcome';

import {
    Container,
    Left,
    Right
} from './styles';

export default function Home()
{
    const [friendlistProps, setFriendlistProps] = useState({ selected: false, props: null });
    const [chatlistProps, setChatlistProps] = useState({ selected: true, props: null });
    
    const [welcomeProps, setWelcomeProps] = useState({ selected: true, props: null });
    const [chatProps, setChatProps] = useState({ selected: false, props: null });

    const navigateLeft = (component, props = null) => {
        if(component === 'chatlist')
        {
            setChatlistProps({
                selected: true,
                props
            });

            setFriendlistProps({
                selected: false,
                props: null
            });
        }
        else if (component === 'friendlist')
        {
            setChatlistProps({
                selected: false,
                props
            });

            setFriendlistProps({
                selected: true,
                props: null
            });
        }
    };

    const navigateRight = (component, props = null) => {
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
                <Header navigateLeft={navigateLeft} />  
                {chatlistProps.selected && <ChatList navigateRight={navigateRight} />}
                {friendlistProps.selected && <FriendList navigateRight={navigateRight} />}
            </Left>
            
            <Right>
                {welcomeProps.selected && <Welcome />}
                {chatProps.selected && <Chat props={chatProps.props} />}
            </Right>
        </Container>
    )
};

