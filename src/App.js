import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello world
          </p>
          <p>
            My name is Ooyama Yoshito.
          </p>
          <p>
            I like bekomoti.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
