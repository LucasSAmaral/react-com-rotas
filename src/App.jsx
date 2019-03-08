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

          <h1>Home</h1>

          <p>Página Principal</p>

            <Link to="/sobre">Ir para página Sobre.</Link>

        </header>
      </div>
    );
  }
}

export default App;
