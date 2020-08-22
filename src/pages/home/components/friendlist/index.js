import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';

import api from '../../../../util/api';

import {
    Container,
    NewFriend,
    List
} from './styles';

import eupng from '../../../../assets/images/eu.png';

export default function ({ navigateRight })
{
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        async function loadFriends()
        {
            const { data } = await api.get('friends/listme');

            setFriends(data);
        };

        loadFriends();
    }, []);

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
            <NewFriend>
                <p>Novo contato</p>
            </NewFriend>

            <List>
                  
                {friends.map(index => (
                    <button onClick={() => navigateRight('chat', returnObjProps(index.room_id, index.friend_id, index.name, index.url))}>
                        <li>
                        <img src={index.url} alt={index.id}/>
                        <h1>{index.name}</h1>
                    </li>
                    </button>
                ))}
            </List>
        </Container>
    );
};
