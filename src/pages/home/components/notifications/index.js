import React, { useEffect, useState } from 'react';
import socketio from 'socket.io-client';

import api from '../../../../util/api';

import {
    List,
    Notification,
    Buttons,
    BtnAceppt,
    BtnReject
} from './styles';

import eupng from '../../../../assets/images/eu.png';

export default function()
{
    const { user: { id: user_id } } = JSON.parse(localStorage.getItem('user'));

    const [invites, setInvites] = useState([]);
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        const socket = socketio('http://localhost:3333', { 
            query: {
                userId: user_id
            }
        });

        socket.on('newinvite-room', () => {
            loadInvites();
        });

        async function loadInvites()
        {
            const { data } = await api.get('friends/invite/listme');

            setInvites(data);
        }

        loadInvites();
    }, [update])

    const handleButtonAccept = async id => {
        await api.post(`friends/invite/accept/${id}`);

        setUpdate(update + 1);
    };


    return(
        <List>
            {invites.map(index => (
                <Notification>
                    <img src={eupng} alt=""/>
                    <div>
                        <p>Nova solicitação de amizade</p>
                        <p style={{ color: '#848484'}}>{index.name}</p>
                    </div>
                    <Buttons>
                        <BtnAceppt onClick={() => handleButtonAccept(index.user_id)}> Aceitar </BtnAceppt>

                        <BtnReject> X </BtnReject>
                    </Buttons>
                </Notification>
            ))}
        </List>
    );
}