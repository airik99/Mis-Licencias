import React, { useState } from 'react';
import './css/App.css';
import MainView from './views/MainView';
import Login from './views/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <MainView />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

