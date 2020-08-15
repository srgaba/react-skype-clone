import React from 'react';

import {
    Container,
    NewChat,
    List
} from './styles';

import eupng from '../../../../assets/images/eu.png';

export default function ChatList()
{
    return(
        <Container>
            <NewChat>
                <p>Novo Chat</p>
            </NewChat>

            <List>
                <li>
                    <img src={eupng} alt="static"/>
                    <div>
                        <h1>Gabriel Cerqueira</h1>
                        <p>Preview do meu texto...</p>
                    </div>
                    <span>25/04/2001</span>
                </li>
                <li>
                    <img src={eupng} alt="static"/>
                    <div>
                        <h1>Gabriel Cerqueira</h1>
                        <p>Preview do meu texto...</p>
                    </div>
                    <span>25/04/2001</span>
                </li>
                <li>
                    <img src={eupng} alt="static"/>
                    <div>
                        <h1>Gabriel Cerqueira</h1>
                        <p>Preview do meu texto...</p>
                    </div>
                    <span>25/04/2001</span>
                </li>
            </List>
        </Container>
    );
};
