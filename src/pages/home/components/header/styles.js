import styled from 'styled-components';
import px2vw from '../../../../util/px2vw';

export const Container = styled.header`
    margin-top: ${px2vw(20)};

    width: 100%;
    height: ${px2vw(220)};

    border-bottom: 1px solid #D3D3D3;
`;

export const SectionOne = styled.div`
    width: 100%;
    height: ${px2vw(50)};

    display: flex;
    align-items: center;

    padding-top: 10px;
    padding-left: 10px;

    img{
        width: ${px2vw(50)};
        height: ${px2vw(50)};
        border-radius: ${px2vw(25)};

        object: fill;
    }

    div{
        margin-top: ${px2vw(20)};
        margin-left: ${px2vw(37)};
        height: ${px2vw(15)};
        width: ${px2vw(15)};

        position: absolute;

        border: 2px solid #fff;
        border-radius: ${px2vw(10)};
        background-color: #0FC402;
    }

    p{
        margin-left: ${px2vw(8)};
        font-size: ${px2vw(16)};
    }

    span{
        margin-top: ${px2vw(3)};
        margin-left: ${px2vw(4)};
        font-size: ${px2vw(16)}; 
        color: #B3B3B4;
    }
`;

export const SectionTwo = styled.div`
    margin-top: ${px2vw(18)}; 
    width: 100%;
`;

export const STDefault = styled.button`
    margin-left: ${px2vw(15)}; 

    width: 90%;
    height: ${px2vw(45)}; 

    padding: ${px2vw(10)}; 
    background-color: #fff;
    border-radius: ${px2vw(5)}; 
    border: 0.5px solid #BCBDBD;
    display: flex;
    align-items: center;

    img{
        width: ${px2vw(25)};
        height: ${px2vw(25)};
    }

    p{
        color: #BCBDBD;
        font-size: ${px2vw(14)};
    }
`;

export const STFind = styled.div`
    width: 100%;
    height: ${px2vw(65)}; 
    background-image: linear-gradient(#0079D4, #00BCF2);
    padding: ${px2vw(15)}; 
    

    input{  
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #fff;
            opacity: 0.5; /* Firefox */
        }

        background: none;
        border: none;
        color: #fff;

        font-weight: bold;
        font-size:  ${px2vw(20)}; 
    }

    button{
        margin-left: ${px2vw(20)}; 
        color: #fff;
        border: none;
        background: none;
    }
`;

export const SectionThree = styled.ul`
    margin-top: ${px2vw(20)}; 
    width: 100%;
    height: ${px2vw(68)}; 

    display: flex;
    align-items: center;

    padding: 15px;
    list-style: none;

    p{
        font-size: ${px2vw(13)}; 
    }

    img{
        object: fill;
        width: ${px2vw(33)};  
    }

    button{
        background: none;
        border: none;
    }
`;

export const STItem = styled.li`
    & + li {
        margin-left: ${px2vw(38)}; 
    }

    display: flex;
    flex-direction: column;
     align-items: center;

    p{
        color: ${props => props.selected ? '#045FB4' : '#BDBDBD'};
    }
`;
