import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import px2vw from '../../../../../../util/px2vw';

export const Body = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    padding: ${px2vw(28)};

    div{
        display: flex;

        button{
            background: none;
            border: none;
        }

        h1{
            margin-left: ${px2vw(40)};
            font-size: ${px2vw(28)};

        }
    }
`;

export const Find = styled.div`
    width: 100%;
    height: ${px2vw(65)}; 
    background-image: linear-gradient(#0079D4, #00BCF2);
    
    display: flex;
    justify-content: center;
    align-items: center;

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
        margin-left: ${px2vw(90)}; 
        color: #fff;
        border: none;
        background: none;
    }
`;

export const Scroll = styled(PerfectScrollbar)`
    
`;

export const Users = styled.ul`
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: ${px2vw(30)};

`;

export const User = styled.li`
    display: flex;
    align-items: center;

    img{
        object: fill;
        height: ${px2vw(35)};
        width: ${px2vw(35)};
    }

    div{
        margin-left: ${px2vw(22)};

        h1{
            color: #363636;
            font-size: ${px2vw(22)};
        }

        object{
            display: flex;

            img{
                height: ${px2vw(20)};
                width: ${px2vw(20)};
            }
        }
    }

    button{
        margin-left: ${px2vw(110)};
        width: ${px2vw(100)};
        height: ${px2vw(35)};
        border: none;
        border-radius: ${px2vw(20)};

        background-color: #363636;
        color: #fff;
    }
`;


export const FindMessage = styled.span`
    padding: ${px2vw(28)};

    color: #BDBDBD;
    font-size: ${px2vw(17)}; 
`;

export const Other = styled.ul`
    padding: ${px2vw(28)};

    h1{
        color: #2E2E2E;
        font-size: ${px2vw(20)};
        margin-bottom: ${px2vw(20)};
    }

    li{
        &+li{
            margin-top: ${px2vw(20)};
        }

        display: flex;
        align-items: center;

        border-bottom: 1px solid #BDBDBD;
        padding-bottom: ${px2vw(20)};

        img{
            object: fill;
            width: ${px2vw(40)};
            height: ${px2vw(40)};

            border-radius: ${px2vw(25)};
        };

        div{
            margin-left: ${px2vw(15)};

            display: flex;
            flex-direction: column;

            h3{
                font-size: ${px2vw(15)}; 
            }

            p{
                color: #BDBDBD;
                font-size: ${px2vw(12)};
            }
        }
    }
`;