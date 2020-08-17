import styled from 'styled-components';
import px2vw from '../../util/px2vw';

export const Container = styled.div`   
    width: ${px2vw(1440)};
    height: 100vh;
    overflow: scroll;
    display: flex;
`;  

export const Left = styled.div`
    position: fixed;
    background-color: #E8EDF5;
    width: 25%;
    height: 100%;
`;

export const Right = styled.div`
    background-color: #fff;
    margin-left: 25%;
    width: 75%;
`;