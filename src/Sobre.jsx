import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>Sobre</h1>

          <p>
            Exemplo de página Sobre.
          </p>

          <Link to="/">Ir para Home.</Link>
          
        </header>
      </div>
    );
  }
}

export default App;
