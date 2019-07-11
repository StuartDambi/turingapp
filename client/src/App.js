import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Turing Store
        </p>
        <a
          className="App-link"
          href="http://localhost:3000/api/products"
          target="_blank"
          rel="noopener noreferrer"
        >
          SHOP
        </a>
      </header>
    </div>
  );
}

export default App;
