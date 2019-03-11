import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

const receiveURL = () => {
  const pathName = window.location.pathname;
  const number = pathName.split('/')[2];
  return alert(number);
}

class App extends Component {

  constructor(){
    super();
    this.state = {
      click: 0
    }
  }

  updateClick() {
    this.setState((prevState) => {
      return { click: prevState.click + 1}
    });
  }

  componentDidMount(){
    setTimeout(()=>{
      receiveURL();
    },100)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>Sobre</h1>

          <p>
            Exemplo de página Sobre.
          </p>

          <button className="btn" onClick={()=>this.updateClick()}>Clicou {this.state.click} {this.state.click <= 1? 'vez' : 'vezes'}</button>

          <Link to="/">Ir para Home.</Link>
          
        </header>
      </div>
    );
  }
}

export default App;
