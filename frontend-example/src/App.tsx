import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

/* function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
} */

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
