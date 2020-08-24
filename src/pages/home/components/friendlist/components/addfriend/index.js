import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import api from '../../../../../../util/api';

import {
    Body,
    Header,
    Find,
    FindMessage, 
    Users,
    User,
    Other
} from './styles';

export default function ({ showAddFriend, setShowAddFriend })
{
    const [allUsers, setAllUsers] = useState([]);
    const [usersRender, setUsersRender] = useState([]);

    const [textFind, setTextFind] = useState("a");

    useEffect(() => {
        async function loadUsers()
        {
            const { data } = await api.get('user/listall');

            setAllUsers(data);
        }

        loadUsers();
    }, []);


    const handleInputFindChange = data => {
        const { target: { value } } = data;



        setTextFind(data.target.value);
    };

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
                        <button onClick={() => setShowAddFriend(false)}>X</button>
                        <h1>Adicionar um novo contato</h1>
                    </div>
                </Header>
                <Find>
                    <input type="text" onChange={handleInputFindChange} value={textFind}/>
                    <button>X</button>
                </Find>
                {textFind ?
                    <Users>
                        <User>
                            <img />
                            <div>
                                <h1>Carla Marques</h1>
                                <object>
                                    <img />
                                    <p>usuário</p>
                                </object>
                                <object>
                                    <img />
                                    <p>localização</p>
                                </object>
                            </div>
                            <button>Adicionar</button>
                        </User>
                    </Users>
                :
                    <>
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
                    </>
                }
            </Body>

        </Modal>
    );
}