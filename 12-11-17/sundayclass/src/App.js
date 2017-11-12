import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Counter from './components/counter.js';
import Timer from './components/timer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br/>
        <Timer />
      </div>
    );
  }
}

export default App;
