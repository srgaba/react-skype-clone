import React from 'react';

import Modal from 'react-modal';

import {
    Body,
    Header,
    Find,
    FindMessage,
    Other
} from './styles';

export default function ({ showAddFriend, setShowAddFriend })
{
    return(
        <Modal
             isOpen={showAddFriend}
             onRequestClose={() => setShowAddFriend(false)}

             style={
                 {
                     overlay: {
                         backgroundColor: 'rgba(25,25,25, .8)'
                     },
                     content: {
                        width: '35%',
                        height: '75%',
                        marginLeft: '30%',
                        padding: '0px'
                    },
                 }
             }
        >
            <Body>
                <Header>
                    <div>
                        <button>X</button>
                        <h1>Adicionar um novo contato</h1>
                    </div>
                </Header>
                <Find>
                    <input type="text"/>
                    <button>X</button>
                </Find>
                <FindMessage>
                    Pesquise pessoas usando o Nome Skype, o número de telefone, o email ou o nome completo
                </FindMessage>
                <Other>
                    <h1>Outras maneiras de adicionar pessoas</h1>
                    <li>
                        <img />
                        <div>
                            <h3>Convidar para o skype</h3>
                            <p>Convide amigos para o Skype via SMS, email e muito mais</p>
                        </div>
                    </li>
                    <li>
                        <img />
                        <div>
                            <h3>Adicionar um número de telefone</h3>
                            <p>Salve um número nos contatos do skype</p>
                        </div>
                    </li>
                </Other>
            </Body>

        </Modal>
    );
}