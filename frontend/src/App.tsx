import React from 'react';
import SignIn from './pages/signin';
/* import SignUp from './pages/signup'; */
import GlobalStyle from './styles/global';

import ToastContainer from './components/toastcontainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
