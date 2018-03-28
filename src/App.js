import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './Componentes/Contador/Contador'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bem vindo ao React</h1>
        </header>
        <div><Contador /></div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
