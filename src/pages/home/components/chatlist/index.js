import React, { useState, useEffect } from 'react';

import api from '../../../../util/api';

import {
    Container,
    NewChat,
    List
} from './styles';

import eupng from '../../../../assets/images/eu.png';

export default function ChatList()
{
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        async function loadRooms()
        {
            const { data } = await api.get('messages/listrooms');

            setRooms(data);
        };

        loadRooms();
    }, [])

    return(
        <Container>
            <NewChat>
                <p>Novo Chat</p>
            </NewChat>

            <List>
                {rooms.map(friend => (
                    <li>
                        <img src={friend.url} alt="static"/>
                        <div>
                            <h1>{friend.name}</h1>
                            <p>Preview do meu texto...</p>
                        </div>
                        <span>25/04/2001</span>
                </li>
                ))}
            </List>
        </Container>
    );
};
