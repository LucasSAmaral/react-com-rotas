import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

const receiveURL = () => {
  const pathName = window.location.pathname;
  const number = pathName.split('/')[2];
  return alert(number);
}

class Sobre extends Component {

  constructor(){
    super();
    this.state = {
      click: 0,
      open: false,
      activeContrast: false
    }
    // atribui o bind this à função.
    // Caso não seja feito no constructor, pode ser feito no próprio onClick
    //Dessa maneira: {()=>this.changeOpen()}
    this.changeOpen = this.changeOpen.bind(this);
  }

  updateClick() {
    this.setState((prevState) => {
      return { click: prevState.click + 1}
    });
  }

  changeOpen() {
    this.setState((prevState) => {
      return { open: !prevState.open}
    })
  }

  Contrast() {
    this.setState((prevState) => {
      return { activeContrast: !prevState.activeContrast}
    })
  }

  componentDidMount(){
    setTimeout(()=>{
      receiveURL();
    },100)
  }
  render() {
    return (
      <div className={`App ${this.state.activeContrast === true ? 'contrast' : ''}`}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>Sobre</h1>

          <p>
            Exemplo de página Sobre.
          </p>

          <button className="btn" onClick={()=>this.updateClick()}>Clicou {this.state.click === 0 ? 'nenhuma vez' : this.state.click === 1 ? `${this.state.click} vez` : `${this.state.click} vezes`}</button>
          <button className={`btn ${this.state.open === true ? 'open' : 'close'}`} onClick={this.changeOpen}>{this.state.open === false ? 'Vermelho' : 'Verde'}</button>
          <button className="btn" onClick={()=>this.Contrast()}>Contrast</button>
          <Link to="/">Ir para Home.</Link>
          
        </header>
      </div>
    );
  }
}

export default Sobre;
