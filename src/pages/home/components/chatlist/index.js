import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';

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

            const formattedData = data.map(index => {
                const obj = {
                    ...index,
                    formattedCreated: format(parseISO(index.createdAt), 'dd/MM/yyyy')
                };

                return obj;
            });

            setRooms(formattedData);
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
                    <button>
                        <li>
                            <img src={friend.url} alt="static"/>
                            <div>
                                <h1>{friend.name}</h1>
                                <p>{friend.lastMessage}</p>
                            </div>
                            <span>{friend.formattedCreated}</span>
                        </li>
                    </button>
                ))}
            </List>
        </Container>
    );
};
