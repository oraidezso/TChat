import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from './Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <Input from={'en'} to={'hu'} />
      </div>
    );
  }
}

export default App;
