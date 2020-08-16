import styled from 'styled-components';
import px2vw from '../../util/px2vw';

export const Container = styled.div`   
    width: ${px2vw(1440)};
    height: 100vh;
    overflow: scroll;
    display: flex;
`;  

export const Left = styled.div`
    background-color: #E8EDF5;
    width: 25%;
`;

export const Right = styled.div`
    background-color: #fff;
    width: 75%;
`;