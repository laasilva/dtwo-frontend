import React from 'react';

import SigninPage from './pages/signin';
import GlobalStyle from './styled/global';
import './styled/font-family.css';

const App: React.FC = () => {
  return (
    <>
      <SigninPage />
      <GlobalStyle />
      <button>teste</button>
    </>
  )
}

export default App;