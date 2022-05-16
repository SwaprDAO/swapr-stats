import React from 'react';
import logo from './assets/swapr-logo.png';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Swapr Stats</h1>
      </header>
    </div>
  );
}

export default App;
