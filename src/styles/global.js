import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
    #root{
        margin: 0 auto;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body{
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }
`;