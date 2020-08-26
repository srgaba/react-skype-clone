import styled from 'styled-components';
import px2vw from '../../../../util/px2vw';

export const List = styled.ul`
    list-style: none;

    padding: ${px2vw(10)};
`;

export const Notification = styled.li`
    display: flex;
    align-items: center;

    color: #2E2E2E;
    font-size: ${px2vw(14)};

    img{
        object: fill;
        width: ${px2vw(45)};
        height: ${px2vw(45)};
        border-radius: ${px2vw(22)};
    }

    p{
        margin-left: ${px2vw(15)};
    }
`;

export const Buttons = styled.div`
    margin-left: ${px2vw(10)};

    display: flex;
`;

export const BtnAceppt = styled.button`
    width: ${px2vw(75)};

    border-radius: ${px2vw(15)};
    border: none;

    background-color: #0080FF;
    color: #fff;
`;

export const BtnReject = styled.button`
    margin-left: ${px2vw(5)};

    border: none;
    background: none;
    color: #DF0101;
`;
