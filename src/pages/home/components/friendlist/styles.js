import styled from 'styled-components';
import px2vw from '../../../../util/px2vw';

export const Container = styled.div`
    font-family: sans-serif;

    width: 100%;
    height: 100%;

    padding: ${px2vw(23)};
`;

export const NewFriend = styled.button`
    margin-left: ${px2vw(40)};
    width: ${px2vw(230)};
    height: ${px2vw(45)};

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fff;
    border: none;
    border-radius: ${px2vw(20)};
    color: #696969;
    font-size: ${px2vw(15)};
`;

export const List = styled.ul`
    margin-top: ${px2vw(20)};
    width: 100%;
    list-style: none;

    button{
        background: none;
        border: none;
    }

    li{
        &+li {
            margin-top:  ${px2vw(30)};
        }


        width: 100%;

        display: flex;
        align-items: center;

        img{
            object: fill;
            width: ${px2vw(50)};
            height: ${px2vw(50)};
            border-radius: ${px2vw(25)};
        };

        h1{
            margin-left: ${px2vw(15)};
            color: #696969;
            font-size: ${px2vw(18)};
            font-weight: normal;
        }

    }
`;