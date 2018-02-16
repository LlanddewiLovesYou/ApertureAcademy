import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Glados from './components/glados/Glados'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Glados />
      </div>
    );
  }
}

export default App;
// <img src={logo} className="App-logo" alt="logo" />
// <h1 className="App-title">Welcome to React</h1>
