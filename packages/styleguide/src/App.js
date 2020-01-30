import React from 'react';
import logo from './logo.svg';
import Hello from '@inplayer-org/paywall-templates/lib/Hello';
import Another from '@inplayer-org/paywall-templates/lib/Another';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello></Hello>
        <Another></Another>
      </header>
    </div>
  );
}

export default App;
