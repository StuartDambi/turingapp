import React from 'react';
import logo from './logo.svg';
import './App.css';
import Details from './details/Details';

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
          href="http://localhost:3000/Details"
          target="_blank"
          rel="noopener noreferrer"
        >
          SHOP
        </a>
      </header>
    <Details></Details>
    </div>
  );
}

export default App;
