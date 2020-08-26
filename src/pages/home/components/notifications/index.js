import React, { useEffect, useState } from 'react';

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
    const [invites, setInvites] = useState([]);

    useEffect(() => {
        async function loadInvites()
        {
            const { data } = await api.get('friends/invite/listme');

            setInvites(data);
        }

        loadInvites();
    }, [])

    const handleButtonAccept = async id => {
        await api.post(`friends/invite/accept/${id}`);
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