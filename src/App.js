import React from 'react';

import GlobalStyle from './styles/global';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <>
      <GlobalStyle />
      <Register />
      {/* <Home /> */}
    </>
  );
}

export default App;
