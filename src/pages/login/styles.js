import styled from 'styled-components';
import px2vw from '../../util/px2vw';
import { motion } from 'framer-motion';

export const Container = styled.div`
    width: ${px2vw(1440)};
    height: ${px2vw(800)};

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Body = styled.div`
    width: ${px2vw(470)};
    height: ${px2vw(580)};

    display: flex;
    flex-direction: column;
    align-items: center; 

    box-shadow: rgba(0, 0, 0, 0.75) 4px 4px 26px -4px;
    border-radius: ${px2vw(30)};
    padding: ${px2vw(55)};

    img{
        object: fill;
        width: ${px2vw(55)};
        height: ${px2vw(55)};
    }
`;

export const Title = styled.div`
    margin-top: ${px2vw(45)};

    width: 100%;

    h1{
        color: #424242;
        font-weight: 550;
        font-size: ${px2vw(23)};
    }

    p{
        color: #6E6E6E;
        font-size: ${px2vw(18)};
    }

`;

export const Inputs = styled.div`
    margin-top: ${px2vw(25)};

    input{
        & + input{
            margin-top: ${px2vw(20)};
        }

        width: 100%;
        height: ${px2vw(40)};

        ::placeholder { 
            color: #6E6E6E;
            opacity: 0.5; 
        }

        background: none;
        border: 1px solid #A9A9A9;
        border-top: none;
        border-right: none;
        border-left: none;

        font-size: ${px2vw(18)};
    }
`;

export const Message = styled.div`
    margin-top: ${px2vw(20)};
    font-size: ${px2vw(18)};

    p{
        color: #6E6E6E;  
    }

    a{
        color: #2E64FE;
    }
`;

export const ButtonLogin = styled(motion.button)`
    margin-top: ${px2vw(25)};

    width: 80%;
    height: ${px2vw(40)};

    border: none;
    background-color: #0080FF;
    border-radius: ${px2vw(10)};

    color: #fff;
`   
