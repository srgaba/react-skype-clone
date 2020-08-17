import styled from 'styled-components';
import px2vw from '../../../../util/px2vw';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 20px;
`;

export const Header = styled.div`
    width: 100%;
    height: ${px2vw(70)};

    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid #BDBDBD;
`;

export const HeaderTitle = styled.div`
    h1{
        color: #2E2E2E;
        font-size: ${px2vw(30)};
    }

    p{
        margin-top: ${px2vw(5)};
        color: #A4A4A4;
        font-size: ${px2vw(14)};
        font-weight: bold;
    }
`;

export const HeaderButtons = styled.div`
    display: flex;

    div{
        & + div{
            margin-left: ${px2vw(25)};
        }
        width: ${px2vw(40)};
        height: ${px2vw(40)};
        border-radius: ${px2vw(20)};
        background-color: #F2F2F2;  
    }
`;

export const Body = styled.ul`
    width: 100%;

    list-style: none;
    display: flex;
    flex-direction: column;

    padding: ${px2vw(40)};
`;

export const Message = styled.li`
    & + li{
        margin-top: ${px2vw(15)};
    }

    width: 100%;

    display: flex;

    justify-content: ${props => props.owner ? 'flex-end' : 'flex-start'};

    div{
        margin-left: ${props => props.marginLeft ? px2vw(40) : 0};
        display: flex;
        flex-direction: column;

        align-items:  ${props => props.owner ? 'flex-end' : 'flex-start'};
    }

    img{
        object: fill;
        height: ${px2vw(40)};
        border-radius: ${px2vw(20)};
    }

    h1{
        font-weight: normal;
        font-size: ${px2vw(17)};
        color: #6E6E6E;
    }

    p{
        padding: ${px2vw(10)};
        background-color: #CEF6F5;
        border-radius: ${px2vw(14)};

        color: #424242;
        font-size:  ${px2vw(18)};
        font-size:  ${px2vw(15)};
    }
`;;

export const SendBox = styled.div`
    margin-top: ${px2vw(380)};
    margin-left:  ${px2vw(45)};

    height: ${px2vw(70)};  

    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top: 1px solid #BDBDBD;
`;

export const Input = styled.div`
    border-radius: ${px2vw(50)};

    width: ${px2vw(780)};
    height: ${px2vw(60)};

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #F2F2F2;

    input{
        border: none;
        background: none;
        width: ${px2vw(600)};
        height: ${px2vw(50)};
    }
`;

export const Submit = styled.button`
    width: ${px2vw(38)};
    height: ${px2vw(38)};
    background-image: linear-gradient(#0079D4, #00BCF2);
    border: none;
    border-radius: ${px2vw(19)};
`;

export const SendBoxButtons = styled.div`
    display: flex;

    div{
        & + div{
            margin-left: ${px2vw(10)};
        }
        width: ${px2vw(45)};
        height: ${px2vw(45)};
        border-radius: ${px2vw(23)};
        background-color: #F2F2F2;  
    }
`;
