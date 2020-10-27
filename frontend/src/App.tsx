import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
/* import SignUp from './pages/signup'; */
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
