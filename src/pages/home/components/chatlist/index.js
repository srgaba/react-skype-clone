import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';

import api from '../../../../util/api';

import {
    Container,
    NewChat,
    List
} from './styles';

import eupng from '../../../../assets/images/eu.png';

export default function ChatList({ navigateRight })
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

    const returnObjProps = (room_id, friend_id, friend_name, friend_url) => {
        const obj = {
            room_id,
            friend_id,
            friend_name,
            friend_url
        };

        return obj;
    };

    return(
        <Container>
            <NewChat>
                <p>Novo Chat</p>
            </NewChat>

            <List>
                {rooms.map(friend => (
                    <button onClick={() => navigateRight('chat', returnObjProps(friend.room_id, friend.friend_id, friend.name, friend.url))}>
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
