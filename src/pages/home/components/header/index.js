import React, { useState } from 'react';

import {
    Container,
    SectionOne,
    SectionTwo,
    STDefault,
    STFind,
    SectionThree,
    STItem
} from './styles';

import eupng from '../../../../assets/images/eu.png';
import findpng from '../../../../assets/images/find.png';

import { ReactComponent as ChatSVG } from '../../../../assets/images/chat.svg';
import { ReactComponent as TelSVG } from '../../../../assets/images/tel.svg';
import { ReactComponent as SinoSVG } from '../../../../assets/images/sino.svg';
import { ReactComponent as ContactSVG } from '../../../../assets/images/contacts.svg';

const svgDefaultStyles = { 
    height: '25px', width: '25px' 
};


export default function Header()
{
    const [findSelected, setFindSelected] = useState(false);



    return(
        <Container>
            <SectionOne>
                <img src={eupng} alt="static"/>
                <div />
                <p>Gabriel Cerqueira</p>
                <span>R$ 0,00</span>
            </SectionOne>

            <SectionTwo>
                {
                    !findSelected ? 
                        <STDefault onClick={() => setFindSelected(true)}>
                            <img src={findpng} alt="static"/>
                            <p>Buscar por pessoas e grupos</p>
                        </STDefault>
                    :
                        <STFind>
                            <input type="text" placeholder="Pesquisar no Skype"/>
                            <button onClick={() => setFindSelected(false)}>X</button>
                        </STFind>
                }
            </SectionTwo>

            <SectionThree>
                <STItem selected>
                    <ChatSVG style={svgDefaultStyles}/>
                    <p>Chats</p>
                </STItem>
                <STItem>
                    <TelSVG style={svgDefaultStyles}/>
                    <p>Chamadas</p>
                </STItem>
                <STItem>
                    <ContactSVG style={svgDefaultStyles}/>
                    <p>Contatos</p>
                </STItem>
                <STItem>
                    <SinoSVG style={svgDefaultStyles}/>
                    <p>Contatos</p>
                </STItem>
            </SectionThree>
        </Container>
    )
}