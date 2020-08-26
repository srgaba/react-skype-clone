import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import api from '../../../../util/api';

import AddFriend from './components/addfriend';

import {
    Container,
    NewFriend,
    List
} from './styles';

import eupng from '../../../../assets/images/eu.png';

export default function ({ navigateRight })
{
    const { user: { id: user_id  } } = JSON.parse(localStorage.getItem('user'));

    const [friends, setFriends] = useState([]);
    const [showAddFriend, setShowAddFriend] = useState(false);

    useEffect(() => {
        const socket = socketio('http://localhost:3333', { 
            query: {
                userId: user_id
            }
        });


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
            {showAddFriend && <AddFriend setShowAddFriend={setShowAddFriend} showAddFriend={showAddFriend}/>}

            <NewFriend onClick={() => setShowAddFriend(true)}>
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
