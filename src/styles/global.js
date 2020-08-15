import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    #root{
        margin: 0 auto;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }
`;